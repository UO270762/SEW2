class MapaDinamico {
    
    constructor() {
        this. oviedo = [-5.8502461,43.3672702];
        this.apiKey = "pk.eyJ1IjoidW8yNzA3NjIiLCJhIjoiY2t3bDh3NnJxMWdtaTJxcGtkbWdqdTRoeiJ9.g1U5mWli_I4qiIVexLIphQ";
        this.container = "seccionMapa";
        this.mapStyle = "mapbox://styles/mapbox/light-v10";
        this.zoom = 6;
    }
    getMapa(){       
        mapboxgl.accessToken = this.apiKey;
        let mapa = new mapboxgl.Map({
          container: this.container,
          style: this.mapStyle,
          center: this.oviedo,
          zoom: this.zoom
        });
        let marcador = new mapboxgl.Marker()
            .setLngLat(this.oviedo)
            .addTo(mapa);
    }     
}
var mapaDinamico = new MapaDinamico();

