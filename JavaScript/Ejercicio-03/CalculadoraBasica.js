"use strict";
class Calculadora {

    constructor() {
        this.memoria = "";
        this.pantalla = "";
        {
            document.addEventListener("keydown", (event) => {
                if (["/", "*", "-", "+", "."].some(el => event.key.includes(el))) {
                    switch (event.key) {
                        case "/":
                            this.division();
                            break;
                        case "*":
                            this.multiplicacion();
                            break;
                        case "-":
                            this.resta();
                            break;
                        case "+":
                            this.suma();
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
		document.getElementById("pantalla").value = this.pantalla;
    }

    division() {
        this.pantalla += "/";
		document.getElementById("pantalla").value = this.pantalla;
    }

    multiplicacion() {
        this.pantalla += "*";
		document.getElementById("pantalla").value = this.pantalla;
    }

    resta() {
        this.pantalla += "-";
		document.getElementById("pantalla").value = this.pantalla;
    }  
    
    suma() {
        this.pantalla += "+";
		document.getElementById("pantalla").value = this.pantalla;
    }

    decimal() {
        this.pantalla += ".";
		document.getElementById("pantalla").value = this.pantalla;
    }

    mMenos(){
        var pant = document.getElementById('pantalla').value;
        var operacion = this.memoria += "-" + pant;
        this.memoria = eval(operacion).toString();
        this.pantalla = "";
        document.getElementById("pantalla").value = this.pantalla;
    }

    mMas(){
        var pant = document.getElementById('pantalla').value;
        var operacion = this.memoria += "+" + pant;
        this.memoria = eval(operacion).toString();
        this.pantalla = "";
        document.getElementById("pantalla").value = this.pantalla;
    }

    mrc() {
        this.pantalla = this.memoria;
        document.getElementById("pantalla").value = this.pantalla;
        this.memoria = "";
    }

    igual() {
        this.pantalla = document.getElementById("pantalla").value;
        this.pantalla = eval(this.pantalla);
        document.getElementById("pantalla").value = this.pantalla;
    }

    borrar() {
        this.pantalla = "";
		document.getElementById("pantalla").value = this.pantalla;
    }
}

var calculadora = new Calculadora();