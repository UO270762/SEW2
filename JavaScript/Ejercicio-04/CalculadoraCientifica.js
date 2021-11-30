"use strict";
class CalculadoraCientifica extends Calculadora {

    constructor() {
        super();
        this.radianes = true;
        this.hyper = false;
        this.change = false;
        this.notacion = false;
    }

    deg() {
        if(this.radianes) {
            this.radianes = false;
            var chang = new Number(document.getElementById("pantalla").value) * (180/Math.PI);
            document.getElementById("pantalla").value = chang;
        } else {
            this.radianes = true;
            var chang = new Number(document.getElementById("pantalla").value) * (Math.PI/180);
            document.getElementById("pantalla").value = chang;
        }
    }

    hyp() {
        if(!this.hyper) {
            let sinhb = document.createElement("button");
            sinhb.setAttribute("type", "button");
            sinhb.setAttribute("onclick", "calculadora.sinh()");
            sinhb.innerHTML = "sinh";
            document.querySelector("body > form > button:nth-child(12)").replaceWith(sinhb);
            let coshb = document.createElement("button");
            coshb.setAttribute("type", "button");
            coshb.setAttribute("onclick", "calculadora.cosh()");
            coshb.innerHTML = "cosh";
            document.querySelector("body > form > button:nth-child(13)").replaceWith(coshb);
            let tanhb = document.createElement("button");
            tanhb.setAttribute("type", "button");
            tanhb.setAttribute("onclick", "calculadora.tanh()");
            tanhb.innerHTML = "tanh";
            document.querySelector("body > form > button:nth-child(14)").replaceWith(tanhb);
            this.hyper = true;
        } else {
            this.hyper = false;
            let sinb = document.createElement("button");
            sinb.setAttribute("type", "button");
            sinb.setAttribute("onclick", "calculadora.sin()");
            sinb.innerHTML = "sin";
            document.querySelector("body > form > button:nth-child(12)").replaceWith(sinb);
            let cosb = document.createElement("button");
            cosb.setAttribute("type", "button");
            cosb.setAttribute("onclick", "calculadora.cos()");
            cosb.innerHTML = "cos";
            document.querySelector("body > form > button:nth-child(13)").replaceWith(cosb);
            let tanb = document.createElement("button");
            tanb.setAttribute("type", "button");
            tanb.setAttribute("onclick", "calculadora.tan()");
            tanb.innerHTML = "tan";
            document.querySelector("body > form > button:nth-child(14)").replaceWith(tanb);
        }
    }

    flecha() {
        if(!this.change) {
            this.change = true;
            let x3b = document.createElement("button");
            x3b.setAttribute("type", "button");
            x3b.setAttribute("onclick", "calculadora.x3()");
            x3b.innerHTML = "x<sup>3</sup>";
            document.querySelector("body > form > button:nth-child(10)").replaceWith(x3b);
            let asinb = document.createElement("button");
            asinb.setAttribute("type", "button");
            asinb.setAttribute("onclick", "calculadora.asin()");
            asinb.innerHTML = "sin<sup>-1</<sup>";
            document.querySelector("body > form > button:nth-child(12)").replaceWith(asinb);
            let acosb = document.createElement("button");
            acosb.setAttribute("type", "button");
            acosb.setAttribute("onclick", "calculadora.acos()");
            acosb.innerHTML = "cos<sup>-1</<sup>";
            document.querySelector("body > form > button:nth-child(13)").replaceWith(acosb);
            let atanb = document.createElement("button");
            atanb.setAttribute("type", "button");
            atanb.setAttribute("onclick", "calculadora.atan()");
            atanb.innerHTML = "tan<sup>-1</<sup>";
            document.querySelector("body > form > button:nth-child(14)").replaceWith(atanb);
            let lnb = document.createElement("button");
            lnb.setAttribute("type", "button");
            lnb.setAttribute("onclick", "calculadora.ln()");
            lnb.innerHTML = "ln";
            document.querySelector("body > form > button:nth-child(17)").replaceWith(lnb);
        } else {
            this.change = false;
            let x2b = document.createElement("button");
            x2b.setAttribute("type", "button");
            x2b.setAttribute("onclick", "calculadora.x2()");
            x2b.innerHTML = "x<sup>2</sup>";
            document.querySelector("body > form > button:nth-child(10)").replaceWith(x2b);
            let sinb = document.createElement("button");
            sinb.setAttribute("type", "button");
            sinb.setAttribute("onclick", "calculadora.sin()");
            sinb.innerHTML = "sin";
            document.querySelector("body > form > button:nth-child(12)").replaceWith(sinb);
            let cosb = document.createElement("button");
            cosb.setAttribute("type", "button");
            cosb.setAttribute("onclick", "calculadora.cos()");
            cosb.innerHTML = "cos";
            document.querySelector("body > form > button:nth-child(13)").replaceWith(cosb);
            let tanb = document.createElement("button");
            tanb.setAttribute("type", "button");
            tanb.setAttribute("onclick", "calculadora.tan()");
            tanb.innerHTML = "tan";
            document.querySelector("body > form > button:nth-child(14)").replaceWith(tanb);
            let logb = document.createElement("button");
            logb.setAttribute("type", "button");
            logb.setAttribute("onclick", "calculadora.log10()");
            logb.innerHTML = "log";
            document.querySelector("body > form > button:nth-child(17)").replaceWith(logb);
        }
    }

    fe(){
        if(!this.notacion) {
            this.notacion = false;
            var res = document.getElementById("pantalla").value;
            this.pantalla = new Number(res).toExponential();
            document.getElementById("pantalla").value = this.pantalla;
        } else {
            this.notacion = true;
            var res = document.getElementById("pantalla").value;
            this.pantalla = new Number(res);
            document.getElementById("pantalla").value = this.pantalla;
        }
    }

    mc() {
        this.memoria = "";
    }
    mr() {
        this.pantalla = this.memoria;
        document.getElementById("pantalla").value = this.pantalla;
    }
    ms() {
        this.memoria = document.getElementById("pantalla").value;
    }
    cuadrado() {
        var result = Math.pow(new Number(document.getElementById("pantalla").value), 2);
        this.pantalla = result;
        document.getElementById("pantalla").value = this.pantalla;
    }
    cubo() {
        var result = Math.pow(new Number(document.getElementById("pantalla").value), 3);
        this.pantalla = result;
        document.getElementById("pantalla").value = this.pantalla;
    }
    potencia() {
        this.pantalla += "**";
		document.getElementById("pantalla").value = this.pantalla;
    }
    
    sin() {
        var result = Math.sin(new Number(document.getElementById("pantalla").value));
        this.pantalla = result;
        document.getElementById("pantalla").value = this.pantalla;
    }

    cos() {
        var result = Math.cos(new Number(document.getElementById("pantalla").value));
        this.pantalla = result;
        document.getElementById("pantalla").value = this.pantalla;
    }

    tan() {
        var result = Math.tan(new Number(document.getElementById("pantalla").value));
        this.pantalla = result;
        document.getElementById("pantalla").value = this.pantalla;
    }

    sinh() {
        var result = Math.sinh(new Number(document.getElementById("pantalla").value));
        this.pantalla = result;
        document.getElementById("pantalla").value = this.pantalla;
    }

    cosh() {
        var result = Math.cosh(new Number(document.getElementById("pantalla").value));
        this.pantalla = result;
        document.getElementById("pantalla").value = this.pantalla;
    }

    tanh() {
        var result = Math.tanh(new Number(document.getElementById("pantalla").value));
        this.pantalla = result;
        document.getElementById("pantalla").value = this.pantalla;
    }

    asin() {
        var result = Math.asin(new Number(document.getElementById("pantalla").value));
        this.pantalla = result;
        document.getElementById("pantalla").value = this.pantalla;
    }

    acos() {
        var result = Math.acos(new Number(document.getElementById("pantalla").value));
        this.pantalla = result;
        document.getElementById("pantalla").value = this.pantalla;
    }

    atan() {
        var result = Math.atan(new Number(document.getElementById("pantalla").value));
        this.pantalla = result;
        document.getElementById("pantalla").value = this.pantalla;
    }

    raiz() {
        var result = Math.sqrt(new Number(document.getElementById("pantalla").value));
        this.pantalla = result;
        document.getElementById("pantalla").value = this.pantalla;
    }

    base10() {
        var result = Math.pow(10,new Number(document.getElementById("pantalla").value));
        this.pantalla = result;
        document.getElementById("pantalla").value = this.pantalla;
    }

    log() {
        var result = Math.log10(new Number(document.getElementById("pantalla").value));
        this.pantalla = result;
        document.getElementById("pantalla").value = this.pantalla;
    }

    ln() {
        var result = Math.log(new Number(this.pantalla));
        this.pantalla = result;
        document.getElementById("pantalla").value = this.pantalla;
    }

    exp() {
        var result = Math.exp(new Number(document.getElementById("pantalla").value));
        this.pantalla = result;
        document.getElementById("pantalla").value = this.pantalla;
    }

    mod() {
        var result = Math.mod(new Number(document.getElementById("pantalla").value));
        this.pantalla = result;
        document.getElementById("pantalla").value = this.pantalla;
    }

    ce() {
        this.pantalla = "";
        document.getElementById("pantalla").value = this.pantalla;
        this.memoria = 0;
    }

    flechaDer() {
        var res = document.getElementById("pantalla").value;
        this.pantalla = res.substring(0, res.length - 1);
        document.getElementById("pantalla").value = this.pantalla;
    }

    pi() {
        this.pantalla += Math.PI;
		document.getElementById("pantalla").value = this.pantalla
    }

    factorial() {
        var n = new Number(document.getElementById("pantalla").value);
        var result = 1; 
	    for (var i=1; i<=n; i++) {
		    result = result * i; 
	    }
        this.pantalla = result;
	    document.getElementById("pantalla").value = this.pantalla;
    }

    masmenos() {
        var result = - new Number(document.getElementById("pantalla").value);
        this.pantalla = result;
        document.getElementById("pantalla").value = this.pantalla;
    }
}

var calculadora = new CalculadoraCientifica();