export class Tabla {
    constructor(size) {
        this.size = size;
        this.contenedor = document.getElementById("tabla-container");
        this.generarTabla();
    }

    generarTabla() {
        this.contenedor.innerHTML = "";
        let table = document.createElement("table");

        for (let i = 0; i < this.size; i++) {
            let row = document.createElement("tr");

            for (let j = 0; j < this.size; j++) {
                let cell = document.createElement("td");
                row.appendChild(cell);

            }

            table.appendChild(row);
        }

        this.contenedor.appendChild(table);
    }

    actualizarTabla(nuevoTamaño) {
        this.size = nuevoTamaño;
        this.generarTabla();
        this.info();
    }

    info() {
        let info = document.getElementById("tamaño");
        info.textContent = `Tamaño actual: ${this.size}x${this.size}`;

        if(this.size < 5){
            info.style.color = "red"
        }else{
            info.style.color = "black"
        }

    }
}

