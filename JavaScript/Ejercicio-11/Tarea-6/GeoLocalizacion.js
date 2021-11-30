class MapaDinamico {
  constructor() {
    navigator.geolocation.getCurrentPosition(this.getPosicion.bind(this), this.verErrores.bind(this));
  }
  getPosicion(posicion) {
      this.oviedo = [posicion.coords.longitude,posicion.coords.latitude];
      this.apiKey = "pk.eyJ1IjoidW8yNzA3NjIiLCJhIjoiY2t3bDh3NnJxMWdtaTJxcGtkbWdqdTRoeiJ9.g1U5mWli_I4qiIVexLIphQ";
      this.container = "seccionMapa";
      this.mapStyle = "mapbox://styles/mapbox/cjaudgl840gn32rnrepcb9b9g";
      this.mensaje = "Geolocalizado";
      this.projection = 'naturalEarth';
      this.zoom = 0.255;
  }
  verErrores(error) {
      switch (error.code) {
        case error.POSITION_UNAVAILABLE:
            this.mensaje = "Localizacion no disponible"
            break;
        case error.PERMISSION_DENIED:
            this.mensaje = "No permite acceder a la localizacion"
            break;
        case error.UNKNOWN_ERROR:
            this.mensaje = "Error fatal"
            break;
    }
  }

  getMapa(){       
      mapboxgl.accessToken = this.apiKey;
      let map = new mapboxgl.Map({
        container: this.container,
        style: this.mapStyle,
        center: this.oviedo,
        projection: this.projection,
        zoom: this.zoom
      });
  }
}

var mapa = new MapaDinamico();
