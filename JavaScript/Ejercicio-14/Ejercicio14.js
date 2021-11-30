"use strict";
class Reproductor {

    constructor() {
        const image_drop_area = document.getElementById("seccionReproductor");
        image_drop_area.addEventListener('dragover', (event) => {
            event.stopPropagation();
            event.preventDefault();
            event.dataTransfer.dropEffect = 'copy';
        });

        image_drop_area.addEventListener('drop', (event) => {
            event.stopPropagation();
            event.preventDefault();
            this.fileList = event.dataTransfer.files;
            this.leerArchivo(this.fileList);
        });
    }

    anadirVideo(file) {
        var video = document.createElement("section")
        video.innerHTML += "<h2>Video</h2>";
        document.body.appendChild(video)
        var archivo = file[0];
        var tipoTexto = 'video.*';
        if (archivo.type.match(tipoTexto)) {
            document.querySelector("body > section").innerHTML += '<video controls><source src="' + archivo.name + '"></video>';
        } 
    }

    leerArchivo(archivo) { 
        var video = archivo[0];
        var tipoVideo = 'video.*';

        if (video.type.match(tipoVideo)) {
            this.tipo = "video";
            document.getElementById("seccionReproductor").innerHTML = "<video controls><source src='" + video.name + "' type='video/mp4;' /></video>";
        }
    }

    ponerPantallaCompleta() {
        var videoElement = document.getElementById("seccionReproductor");
        if (!document.mozFullScreen && !document.webkitFullScreen) {
            if (videoElement.mozRequestFullScreen) {
                videoElement.mozRequestFullScreen();
            } else {
                videoElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
            }
        } else {
            if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else {
                document.webkitCancelFullScreen();
            }
        }
    }
}
var rep = new Reproductor();