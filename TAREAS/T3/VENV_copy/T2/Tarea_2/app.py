from flask import Flask, request, render_template, redirect, url_for, flash
from utils.validations import validate_artesano, validate_artesania_img
import database.db as db
from markupsafe import escape
import uuid
import filetype

UPLOAD_FOLDER = 'uploads'

app = Flask(__name__)

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/registrar-artesano", methods=["POST", "GET"])
def registrar_artesano():
    if request.method == 'POST':
        region = request.form.get("region")
        comuna = request.form.get("comuna")
        tipos_artesania = request.form.getlist('tipo_artesania')
        description = escape(request.form.get("descripcion_artesania"))
        foto1 = request.files.get("imgs1")
        foto2 = request.files.get("imgs2")
        foto3 = request.files.get("imgs3")
        name = escape(request.form.get("name"))
        email = escape(request.form.get("email"))
        phone = escape(request.form.get("phone"))
        msg = ""

        if validate_artesano(region,comuna,tipos_artesania,foto1,foto2,foto3,name,email,phone):

            region_id = db.get_region_id(region)
            comuna_id = db.get_comuna_id_by_region_id(region_id,comuna)
            tipos_id = [db.get_tipo_id(tipos_artesania[0]),
                        db.get_tipo_id(tipos_artesania[1]),
                        db.get_tipo_id(tipos_artesania[2])]
            
            status, error = db.agregar_artesano(comuna_id,description,name,email,phone)
            
            if status:

                artesano_id = db.get_artesano_id()

                for t in tipos_id:
                    if t is not None:
                        db.insert_artesano_tipo(artesano_id,t)
                
                if validate_artesania_img(foto1,foto2,foto3):

                    if foto1 != None:
                        extension1 = filetype.guess(foto1).extension
                        uuid1 = str(uuid.uuid4())
                        img1_name = f"{foto1.filename}_{uuid1}.{extension1}"
                        db.insert_img(UPLOAD_FOLDER,img1_name,artesano_id)

                    if foto2 != None:
                        extension2 = filetype.guess(foto2).extension
                        uuid2 = str(uuid.uuid4())
                        img1_name = f"{foto2.filename}_{uuid2}.{extension2}"
                        db.insert_img(UPLOAD_FOLDER,img1_name,artesano_id)

                    if foto3 != None:
                        extension3 = filetype.guess(foto3).extension
                        uuid3 = str(uuid.uuid4())
                        img1_name = f"{foto3.filename}_{uuid3}.{extension3}"
                        db.insert_img(UPLOAD_FOLDER,img1_name,artesano_id)

                flash("Artesano registrado exitosamente.", "success")
                return redirect(url_for("index"))
            
            else:
                flash(f"Fallo validación: {msg}", error)

    return render_template("./agregar-artesano.html")

@app.route("/listado-artesanos", methods=["GET"])
def listado_artesanos():

    list_artesanos = db.fetch_newest5(0)

    info_artesanos = []

    for artesano in list_artesanos:
        id,comuna_id,_,name,_,phone = artesano

        tipos = db.get_tipos_of_artesano(id)

        _foto = db.get_img(id)[0]
        ruta = _foto[0]
        foto = _foto[1]

        comuna,_ = db.get_comuna_by_id(comuna_id)
        info_artesano = {"id": id,
                        "comuna": comuna,
                        "name": name,
                        "phone": phone,
                        "tipos": tipos,
                        "route": ruta,
                        "foto": foto}

        info_artesanos.append(info_artesano)

    return render_template("./ver-artesanos.html", info_artesanos=info_artesanos)

@app.route("/informacion-artesano/<int:id>", methods=["GET"])
def ver_artesano(id): 

    comuna_id,description,name,email,phone = db.get_artesano_by_id(id)
    comuna,region_id = db.get_comuna_by_id(comuna_id)
    region = db.get_region_by_id(region_id)

    tipos = db.get_tipos_of_artesano(id)
 
    _foto1 = db.get_img(id)[0]
    ruta1 = _foto1[0]
    foto1 = _foto1[1]

    _foto2 = False
    _foto3 = False
    ruta2 = None
    ruta3 = None
    foto2 = None
    foto3 = None

    if len(db.get_img(id)) > 1:
        _foto2 = db.get_img(id)[1]
        ruta2 = _foto2[0]
        foto2 = _foto2[1]

    if len(db.get_img(id)) == 3:
        _foto3 = db.get_img(id)[2]
        ruta3 = _foto3[0]
        foto3 = _foto3[1]

    info_artesano = {"id": id,
                     "name": name,
                     "phone": phone,
                     "region": region,
                     "comuna": comuna,
                     "tipos": tipos,
                     "description": description,
                     "email": email,
                     "ruta1": ruta1,
                     "ruta2": ruta2,
                     "ruta3": ruta3,
                     "foto1": foto1,
                     "foto2":foto2,
                     "foto3":foto3}

    return render_template("./informacion-artesano.html", id=id, info_artesano=info_artesano, _foto1=_foto1, _foto2=_foto2, _foto3=_foto3)

if __name__ == "__main__":
    app.run(debug=True)