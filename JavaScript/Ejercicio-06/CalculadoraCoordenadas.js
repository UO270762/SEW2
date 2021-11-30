"use strict";
class PilaLIFO {
    constructor() {
        this.pila = new Array();
    }

    mostrar() {
        var contenidoPila = ""
        for (var i in this.pila) {
            contenidoPila += this.pila[i] + "\n";
        }
        return contenidoPila;
    }

    size() {
        return this.pila.length;
    }

    pushPila(valor) {
        this.pila.push(valor);
    }

    popPila() {
        return (this.pila.pop());
    }

    clear() {
        var size = this.pila.length;
        for (var i = 0; i < size; i++)
            this.pila.pop();
    }

    size() {
        return this.pila.length;
    }
}

class CalculadoraCoordenadas {
     
    constructor() {
        this.pantalla = "";
        this.pila = new PilaLIFO();
        {
            document.addEventListener("keydown", (event) => {
                if (["-", ",", "."].some(el => event.key.includes(el))) {
                    switch (event.key) {
                        case "-":
                            this.menos();
                            break;
                        case ",":
                            this.coma();
                            break;
                        case ".":
                            this.decimal();
                            break;
                    }
                }
                else if (!isNaN(event.key)) {
                    this.digitos(event.key);
                }
                else if (event.key == "Enter") {
                    this.igual();
                }
            })
        };
    }
    digitos(num) {
        this.pantalla += num;
		document.getElementById("pantalla2").value = this.pantalla;
    }

    decimal() {
        this.pantalla += ".";
		document.getElementById("pantalla2").value = this.pantalla;
    }

    coma() {
        this.pantalla += ",";
		document.getElementById("pantalla2").value = this.pantalla
    }

    menos() {
        this.pantalla += "-";
		document.getElementById("pantalla2").value = this.pantalla;
    }

    borrar() {
        if(this.pantalla == "") {
            this.pila.popPila();
            document.getElementById("pantalla1").value = this.pila.mostrar();
        } else {
            this.pantalla = "";
            document.getElementById("pantalla2").value = this.pantalla;
        }
    }
    
    enter() {
        this.pila.pushPila(this.pantalla);
        this.pantalla = "";
        document.getElementById("pantalla1").value = this.pila.mostrar();
        document.getElementById("pantalla2").value = this.pantalla;
    }

    distancia() {
        var punto1 = this.pila.popPila();
        var punto2 = this.pila.popPila();
        const punto1array = punto1.split(",");
        var x1 = punto1array[0];
        var y1 = punto1array[1];
        const punto2array = punto2.split(",");
        var x2 = punto2array[0];
        var y2 = punto2array[1];
        var dist = Math.sqrt( Math.pow((x1-x2), 2) + Math.pow((y1-y2), 2));
        this.pantalla = dist.toFixed(6) * 100;
        document.getElementById("pantalla2").value = this.pantalla + "km";
        document.getElementById("pantall1").clear();
    }
}

var calculadora = new CalculadoraCoordenadas();