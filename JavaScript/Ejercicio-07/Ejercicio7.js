"use strict";
class Ejercicio7 {

    constructor(){
    }

    ocultar() {
        $("h1").hide();
        $("p").hide();
    }

    mostrar() {
        $("h1").show();
        $("p").show();
    }

    modificar() {
        $("h2").text("Ahora cambio el encabezado");
    }

    añadir() {
        $("body").after("<footer><p>Gracias por visitar mi web: Ivan</p></footer>");
    }

    eliminar() {
        $("footer").remove();
    }

    recorrer() {
        $("*", document.body).each(function() {
            var etiquetaPadre = $(this).parent().get(0).tagName;
            $(this).prepend(document.createTextNode( "Etiqueta padre : <"  + etiquetaPadre + "> elemento : <" + $(this).get(0).tagName +"> valor: "));
        });
    }

    sumar() {
        var fila = 0;
        var columna = 0;
        $(document).ready(function () {
            $("table td").each(function() {
                if (!isNaN($(this).text()))
                    columna += 1;
            });
            $("table tr").each(function() {
                fila += 1;
            });
            alert("Nº de filas: " + fila + " y columnas: " + columna);
        });
    }
}

var ejercicio7 = new Ejercicio7();