import Map from 'https://js.arcgis.com/4.19/@arcgis/core/Map.js'
import MapView from "https://js.arcgis.com/4.19/@arcgis/core/views/MapView.js";
import FeatureLayer from "https://js.arcgis.com/4.19/@arcgis/core/layers/FeatureLayer.js";
import esriConfig from "https://js.arcgis.com/4.19/@arcgis/core/config.js";

esriConfig.apiKey = "AAPK910bc52162d04535b4b2e399d655b842-B8-L-B-bSHMrLN2KVLmjffN-wrL_S3hXWvzpGoUceNidwHU5YxKxYF9dcKDp9xH";

const map = new Map({
    basemap: "arcgis-light-gray" // https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#basemap
});

const view = new MapView({
    container: "viewDiv",
    map: map,
    center: [-3.703869,40.417539], // long y lat
    zoom: 10
});

const healthLayer = new FeatureLayer({
    url: 'https://services1.arcgis.com/nCKYwcSONQTkPA4K/arcgis/rest/services/Centros_de_salud_de_Madrid/FeatureServer/0/'
});

// https://hub.arcgis.com/datasets/Madrid::distritos-de-madrid/explore?location=40.477667%2C-3.703506%2C11.86
const distritosLayer = new FeatureLayer({
    url: 'https://services3.arcgis.com/lnFkorfBb3ma2riJ/arcgis/rest/services/Distritos_de_Madrid/FeatureServer/0/'
})

map.addMany([distritosLayer, healthLayer]);