const regiones_y_comunas = {
    regiones: [
        {
            nombre: "Arica y Parinacota",
            comunas: ["Arica", "Camarones", "Putre", "General Lagos"]
        },
        {
            nombre: "Tarapacá",
            comunas: ["Iquique", "Alto Hospicio", "Pozo Almonte", "Camiña", "Colchane", "Huara", "Pica"]
        },
        {
            nombre: "Antofagasta",
            comunas: ["Antofagasta", "Mejillones", "Sierra Gorda", "Taltal", "Calama", "Ollagüe", "San Pedro de Atacama", "Tocopilla", "María Elena"]
        },
        {
            nombre: "Atacama",
            comunas: ["Copiapó", "Caldera", "Tierra Amarilla", "Chañaral", "Diego de Almagro", "Vallenar", "Alto del Carmen", "Freirina", "Huasco"]
        },
        {
            nombre: "Coquimbo",
            comunas: ["La Serena", "Coquimbo", "Andacollo", "La Higuera", "Paiguano", "Vicuña", "Illapel", "Canela", "Los Vilos", "Salamanca", "Ovalle", "Combarbalá", "Monte Patria", "Punitaqui", "Río Hurtado"]
        },
        {
            nombre: "Valparaíso",
            comunas: ["Valparaíso", "Casablanca", "Concón", "Juan Fernández", "Puchuncaví", "Quintero", "Viña del Mar", "Isla de Pascua", "Los Andes", "Calle Larga", "Rinconada", "San Esteban", "La Ligua", "Cabildo", "Papudo", "Petorca", "Zapallar", "Quillota", "Calera", "Hijuelas", "La Cruz", "Nogales", "San Antonio", "Algarrobo", "Cartagena", "El Quisco", "El Tabo", "Santo Domingo", "San Felipe", "Catemu", "Llaillay", "Panquehue", "Putaendo", "Santa María", "Quilpué", "Limache", "Olmué", "Villa Alemana"]
        },
        {
            nombre: "Región del Libertador Gral. Bernardo O’Higgins",
            comunas: ["Rancagua", "Codegua", "Coinco", "Coltauco", "Doñihue", "Graneros", "Las Cabras", "Machalí", "Malloa", "Mostazal", "Olivar", "Peumo", "Pichidegua", "Quinta de Tilcoco", "Rengo", "Requínoa", "San Vicente", "Pichilemu", "La Estrella", "Litueche", "Marchihue", "Navidad", "Paredones", "San Fernando", "Chépica", "Chimbarongo", "Lolol", "Nancagua", "Palmilla", "Peralillo", "Placilla", "Pumanque", "Santa Cruz"]
        },
        {
            nombre: "Región del Maule",
            comunas: ["Talca", "Constitución", "Curepto", "Empedrado", "Maule", "Pelarco", "Pencahue", "Río Claro", "San Clemente", "San Rafael", "Cauquenes", "Chanco", "Pelluhue", "Curicó", "Hualañé", "Licantén", "Molina", "Rauco", "Romeral", "Sagrada Familia", "Teno", "Vichuquén", "Linares", "Colbún", "Longaví", "Parral", "Retiro", "San Javier", "Villa Alegre", "Yerbas Buenas"]
        },
        {
            nombre: "Región de Ñuble",
            comunas: ["Cobquecura", "Coelemu", "Ninhue", "Portezuelo", "Quirihue", "Ránquil", "Treguaco", "Bulnes", "Chillán Viejo", "Chillán", "El Carmen", "Pemuco", "Pinto", "Quillón", "San Ignacio", "Yungay", "Coihueco", "Ñiquén", "San Carlos", "San Fabián", "San Nicolás"]
        },
        {
            nombre: "Región del Biobío",
            comunas: ["Concepción", "Coronel", "Chiguayante", "Florida", "Hualqui", "Lota", "Penco", "San Pedro de la Paz", "Santa Juana", "Talcahuano", "Tomé", "Hualpén", "Lebu", "Arauco", "Cañete", "Contulmo", "Curanilahue", "Los Álamos", "Tirúa", "Los Ángeles", "Antuco", "Cabrero", "Laja", "Mulchén", "Nacimiento", "Negrete", "Quilaco", "Quilleco", "San Rosendo", "Santa Bárbara", "Tucapel", "Yumbel", "Alto Biobío"]
        },
        {
            nombre: "Región de la Araucanía",
            comunas: ["Temuco", "Carahue", "Cunco", "Curarrehue", "Freire", "Galvarino", "Gorbea", "Lautaro", "Loncoche", "Melipeuco", "Nueva Imperial", "Padre las Casas", "Perquenco", "Pitrufquén", "Pucón", "Saavedra", "Teodoro Schmidt", "Toltén", "Vilcún", "Villarrica", "Cholchol", "Angol", "Collipulli", "Curacautín", "Ercilla", "Lonquimay", "Los Sauces", "Lumaco", "Purén", "Renaico", "Traiguén", "Victoria"]
        },
        {
            nombre: "Región de Los Ríos",
            comunas: ["Valdivia", "Corral", "Lanco", "Los Lagos", "Máfil", "Mariquina", "Paillaco", "Panguipulli", "La Unión", "Futrono", "Lago Ranco", "Río Bueno"]
        },
        {
            nombre: "Región de Los Lagos",
            comunas: ["Puerto Montt", "Calbuco", "Cochamó", "Fresia", "Frutillar", "Los Muermos", "Llanquihue", "Maullín", "Puerto Varas", "Castro", "Ancud", "Chonchi", "Curaco de Vélez", "Dalcahue", "Puqueldón", "Queilén", "Quellón", "Quemchi", "Quinchao", "Osorno", "Puerto Octay", "Purranque", "Puyehue", "Río Negro", "San Juan de la Costa", "San Pablo", "Chaitén", "Futaleufú", "Hualaihué", "Palena"]
        },
        {
            nombre: "Región Aisén del Gral. Carlos Ibáñez del Campo",
            comunas: ["Coihaique", "Lago Verde", "Aisén", "Cisnes", "Guaitecas", "Cochrane", "O’Higgins", "Tortel", "Chile Chico", "Río Ibáñez"]
        },
        {
            nombre: "Región de Magallanes y de la Antártica Chilena",
            comunas: ["Punta Arenas", "Laguna Blanca", "Río Verde", "San Gregorio", "Cabo de Hornos (Ex Navarino)", "Antártica", "Porvenir", "Primavera", "Timaukel", "Natales", "Torres del Paine"]
        },
        {
            nombre: "Región Metropolitana de Santiago",
            comunas: ["Cerrillos", "Cerro Navia", "Conchalí", "El Bosque", "Estación Central", "Huechuraba", "Independencia", "La Cisterna", "La Florida", "La Granja", "La Pintana", "La Reina", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul", "Maipú", "Ñuñoa", "Pedro Aguirre Cerda", "Peñalolén", "Providencia", "Pudahuel", "Quilicura", "Quinta Normal", "Recoleta", "Renca", "Santiago", "San Joaquín", "San Miguel", "San Ramón", "Vitacura", "Puente Alto", "Pirque", "San José de Maipo", "Colina", "Lampa", "Tiltil", "San Bernardo", "Buin", "Calera de Tango", "Paine", "Melipilla", "Alhué", "Curacaví", "María Pinto", "San Pedro", "Talagante", "El Monte", "Isla de Maipo", "Padre Hurtado", "Peñaflor"]
         }
    ]
};

const regionSelecter = document.getElementById("region");
const comunaSelecter = document.getElementById("comuna");

// Agregar opciones al selector de regiones
regiones_y_comunas.regiones.forEach(region => {
    const option = document.createElement("option");
    option.value = region.nombre;
    option.text = region.nombre;
    regionSelecter.add(option);
  });

// Función para actualizar el selector de comunas según la región seleccionada
regionSelecter.addEventListener("change", () => {
    const nombreregionSelected = regionSelecter.value;
    
    // Buscar la región correspondiente
    const regionSelected = regiones_y_comunas.regiones.find(region => region.nombre === nombreregionSelected);
  
    // Actualizar el selector de comunas con las comunas de la región
    comunaSelecter.innerHTML = "";
    regionSelected.comunas.forEach(comuna => {
      const option = document.createElement("option");
      option.text = comuna;
      comunaSelecter.add(option);
    });
  });

// Obtener referencias a los elementos del formulario
const form = document.getElementById("agregar-artesano");
const tipoArtesaniaCheckboxes = document.querySelectorAll("input[name='tipo_artesania']");
const nombreInput = document.getElementById("nombre");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
let archivo1 = document.getElementById("imgs1");
let archivo2 = document.getElementById("imgs2");
let archivo3 = document.getElementById("imgs3");

// Código comentado específicado en el README
/*
// Agregar evento de clic al botón de envío
const envioButton = document.getElementById("envio");
envioButton.addEventListener("click", validateForm);

// Función para validar el formulario
function validateForm() {
    
    // Validar condiciones
    if (regionSelecter.value === "defecto") {
        alert("Seleccione una región");
        return;
    }

    if (comunaSelecter.value === "defecto") {
        alert("Seleccione una comuna");
        return;
    }

    const selectedTipoArtesania = Array.from(tipoArtesaniaCheckboxes).filter(checkbox => checkbox.checked);
    if (selectedTipoArtesania.length === 0 || selectedTipoArtesania.length > 3) {
        alert("Debe seleccionar entre 1 y 3 tipos de artesanía.");
        return;
    }

    if (archivo1files.length === 0 && archivo2.files.length === 0 && archivo3.files.length === 0) {
        var archivosIngresados = false; 
    } else {
        var archivosIngresados = true;
    }
    if (!archivosIngresados) {
        alert("Debe entregar entre 1 a 3 fotos de su Artesanía.");
        return;
    }

    if (nombreInput.length < 3 || nombreInput.length > 80 || nombreInput === null) {
        alert("Indique un nombre válido");
        return;
    }

    let regexEmail = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/
    let emailValid = regexEmail.test(emailInput);
    if (!emailValid) {
        alert("Indique una dirección de correo electrónica válida");
        return;
    }

    let regexPhone = /^[0-9]+$/; 
    let phoneValid = regexPhone.test(phoneInput);
    if (!phoneValid) {
        alert("Indique un número telefónico válido");
        return;
    }

    const confirmacion = confirm("¿Confirma el registro de este artesano?");
    
    if (confirmacion) {
        // En caso afirmativo, mostrar mensaje de agradecimiento
        alert("Hemos recibido el registro de Artesano. ¡Muchas gracias!");

        // Agregar un botón o enlace para volver a la portada
        const volverBtn = document.createElement("button");
        volverBtn.textContent = "Volver a la portada";
        volverBtn.addEventListener("click", function() {
            window.location.href = "index.html";
        });

        document.body.appendChild(volverBtn);
    }

    // Si todas las validaciones pasan, enviar el formulario
    form.dispatchEvent(new Event("submit"));
}
*/
