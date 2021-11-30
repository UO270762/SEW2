"use strict";
class MapaGeoJSON {
    load(files) {
        var archivo = files[0];
        var lector = new FileReader();
        lector.onload = function (event) {
            var text = lector.result;
            var geojson = JSON.parse(text);
            L.mapbox.accessToken = 'pk.eyJ1IjoidW8yNzA3NjIiLCJhIjoiY2t3bDh3NnJxMWdtaTJxcGtkbWdqdTRoeiJ9.g1U5mWli_I4qiIVexLIphQ';
            L.mapbox.map('mapa')
                .setView([40.9783, -5.2105], 7)
                .addLayer(L.mapbox.styleLayer('mapbox://styles/mapbox/cjaudgl840gn32rnrepcb9b9g'))
                .featureLayer.setGeoJSON(geojson);
        }
        lector.readAsText(archivo);
    }
}
var mapa = new MapaGeoJSON();
