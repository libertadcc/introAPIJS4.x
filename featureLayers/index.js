import Map from 'https://js.arcgis.com/4.19/@arcgis/core/Map.js'
import MapView from "https://js.arcgis.com/4.19/@arcgis/core/views/MapView.js";
import FeatureLayer from "https://js.arcgis.com/4.19/@arcgis/core/layers/FeatureLayer.js";
import esriConfig from "https://js.arcgis.com/4.19/@arcgis/core/config.js";

esriConfig.apiKey = "tu api key";

const map = new Map({
    basemap: "arcgis-light-gray" // https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#basemap
});

const view = new MapView({
    container: "viewDiv",
    map: map,
    center: [-3.703869,40.417539], // long y lat
    zoom: 10
});

const distritosLayer = new FeatureLayer({
    url: 'https://services3.arcgis.com/lnFkorfBb3ma2riJ/arcgis/rest/services/Distritos_de_Madrid/FeatureServer/0/'
})

map.addM(distritosLayer);