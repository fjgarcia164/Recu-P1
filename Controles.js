import { Tabla } from "./Tabla.js";

export class Controles {
    constructor(tabla) {
        this.tabla = tabla;
        this.tamañoInicial = tabla.size;
        this.mas = document.getElementById("btn-incremento").addEventListener("click", () => this.sumar());
        this.menos = document.getElementById("btn-decremento").addEventListener("click", () => this.restar());
        this.re = document.getElementById("btn-reiniciar").addEventListener("click", () => this.reiniciar());


    }

    sumar() {
        this.tabla.actualizarTabla(this.tabla.size + 1);
    }

    restar() {
        if (this.tabla.size > 2) {
            this.tabla.actualizarTabla(this.tabla.size - 1);
        }
    }

    reiniciar() {
        if (this.tabla.size > 3) {
            this.tabla.actualizarTabla(this.tamañoInicial);
        }
    }
}

