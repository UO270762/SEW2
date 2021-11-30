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

class CalculadoraRPN {
     
    constructor() {
        this.pantalla = "";
        this.pila = new PilaLIFO();
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
		document.getElementById("pantalla2").value = this.pantalla;
    }
    
    log() {
        if(this.pila.size() >= 1) {
            var op1 = this.pila.popPila();
            var res = Math.log10(new Number(op1));
            this.pila.pushPila(res);
            document.getElementById("pantalla1").value = this.pila.mostrar();
        }
    }

    sin() {
        if(this.pila.size() >= 1) {
            var op1 = this.pila.popPila();
            var res = Math.sin(new Number(op1));
            this.pila.pushPila(res);
            document.getElementById("pantalla1").value = this.pila.mostrar();
        }
    }

    cos() {
        if(this.pila.size() >= 1) {
            var op1 = this.pila.popPila();
            var res = Math.cos(new Number(op1));
            this.pila.pushPila(res);
            document.getElementById("pantalla1").value = this.pila.mostrar();
        }
    }

    tan() {
        if(this.pila.size() >= 1) {
            var op1 = this.pila.popPila();
            var res = Math.tan(new Number(op1));
            this.pila.pushPila(res);
            document.getElementById("pantalla1").value = this.pila.mostrar();
        }
    }

    cuadrado() {
        if(this.pila.size() >= 1) {
            var op1 = this.pila.popPila();
            var res = Math.pow(new Number(op1), 2);
            this.pila.pushPila(res);
            document.getElementById("pantalla1").value = this.pila.mostrar();
        }
    }

    potencia() {
        if(this.pila.size() >= 2) {
            var op1 = this.pila.popPila();
            var op2 = this.pila.popPila();
            var res = Math.pow(new Number(op1), new Number(op2));
            this.pila.pushPila(res);
            document.getElementById("pantalla1").value = this.pila.mostrar();
        }
    } 

    base10() {
        if(this.pila.size() >= 1) {
            var op1 = this.pila.popPila();
            var res = Math.pow(10,new Number(op1));
            this.pila.pushPila(res);
            document.getElementById("pantalla1").value = this.pila.mostrar();
        }
    }

    division() {
        if(this.pila.size() >= 2) {
            var op1 = this.pila.popPila();
            var op2 = this.pila.popPila();
            var res = op / op2;
            this.pila.pushPila(res);
            document.getElementById("pantalla1").value = this.pila.mostrar();
        }
    }

    multiplicacion() {
        if(this.pila.size() >= 2) {
            var op1 = this.pila.popPila();
            var op2 = this.pila.popPila();
            var res = op1 * op2;
            this.pila.pushPila(res);
            document.getElementById("pantalla1").value = this.pila.mostrar();
        }
    }

    resta() {
        if(this.pila.size() >= 2) {
            var op1 = this.pila.popPila();
            var op2 = this.pila.popPila();
            var res = op1 - op2;
            this.pila.pushPila(res);
            document.getElementById("pantalla1").value = this.pila.mostrar();
        }
    }  

    suma() {
        if(this.pila.size() >= 2) {
            var op1 = this.pila.popPila();
            var op2 = this.pila.popPila();
            var res = op1 + op2;
            this.pila.pushPila(res);
            document.getElementById("pantalla1").value = this.pila.mostrar();
        }
    }

    decimal() {
        this.pantalla += ".";
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
        this.pila.pushPila(new Number(this.pantalla));
        this.pantalla = "";
        document.getElementById("pantalla1").value = this.pila.mostrar();
        document.getElementById("pantalla2").value = this.pantalla;
    }
}

var calculadora = new CalculadoraRPN();