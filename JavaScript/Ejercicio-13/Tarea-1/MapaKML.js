"use strict";
class MapaKML {
    getMapa() {
        L.mapbox.accessToken = 'pk.eyJ1IjoidW8yNzA3NjIiLCJhIjoiY2t3bDh3NnJxMWdtaTJxcGtkbWdqdTRoeiJ9.g1U5mWli_I4qiIVexLIphQ';
        var map = L.mapbox.map('seccionMapa')
            .addLayer(L.mapbox.styleLayer('mapbox://styles/mapbox/light-v10'));

        var runLayer = omnivore.kml('MapaKML.kml')
            .on('ready', function () {
                map.fitBounds(runLayer.getBounds());
            })
            .addTo(map);
    }
}

var mapa = new MapaKML();