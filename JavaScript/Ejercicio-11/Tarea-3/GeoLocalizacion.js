"use strict";
class GeoLocalizacion {
    constructor() {
        navigator.geolocation.getCurrentPosition(this.getPosicion.bind(this), this.verErrores.bind(this));
    }
    getPosicion(posicion) {
        this.longitud = posicion.coords.longitude;
        this.latitud = posicion.coords.latitude;
        this.precision = posicion.coords.accuracy;
        this.altitud = posicion.coords.altitude;
        this.precisionAltitud = posicion.coords.altitudeAccuracy;
        this.rumbo = posicion.coords.heading;
        this.velocidad = posicion.coords.speed;
    }
    verErrores(error){
        switch(error.code) {
        case error.PERMISSION_DENIED:
            this.mensaje = "El usuario no permite la petición de geolocalización"
            break;
        case error.POSITION_UNAVAILABLE:
            this.mensaje = "Información de geolocalización no disponible"
            break;
        case error.TIMEOUT:
            this.mensaje = "La petición de geolocalización ha caducado"
            break;
        case error.UNKNOWN_ERROR:
            this.mensaje = "Se ha producido un error desconocido"
            break;
        }
    }
    getLongitud() {
        return this.longitud;
    }
    getLatitud() {
        return this.latitud;
    }
    getAltitud() {
        return this.altitud;
    }
    getMapa(){
        var ubicacion=document.querySelector("body > section > p");
        
        var apiKey = "?access_token=pk.eyJ1IjoidW8yNzA3NjIiLCJhIjoiY2t3bDh3NnJxMWdtaTJxcGtkbWdqdTRoeiJ9.g1U5mWli_I4qiIVexLIphQ";
        var url = "https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/";
        var centro = this.longitud + "," + this.latitud + "," + 11 + "," + 0;
        var tamaño= "/800x600";
        var marcador = "pin-s+000000(" + this.longitud + "," + this.latitud + ")/";
        
        this.imagenMapa = url + marcador + centro + tamaño + apiKey;
        ubicacion.innerHTML = "<img src='"+this.imagenMapa+"' alt='mapa estático google' />";
    }
}
var posicion = new GeoLocalizacion();