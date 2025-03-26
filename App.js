import { Tabla }  from "./Tabla.js";
import {Controles} from "./Controles.js";

document.addEventListener("DOMContentLoaded", () => {
    let tabla = new Tabla(3);
    new Controles(tabla);
});
