import Aseo from "./aseo.js";
import Administracion from "./administracion.js";
import gimnasio from "./gimnasio.js";
import Guardar from "./guardar.js";
import Registro from "./registro.js";

const d = document;

d.addEventListener("DOMContentLoaded", e =>{
    Administracion(".mt","tipo","calcular-admin","resultado-admin")
    Aseo(".mt","calcular-aseo","resultado-aseo")
    gimnasio(".ctn-habitante","calcular-predio","gimPredio")
    Guardar("form-predio")
})
Registro()