import Map from 'https://js.arcgis.com/4.19/@arcgis/core/Map.js'
import SceneView from "https://js.arcgis.com/4.19/@arcgis/core/views/SceneView.js";
import esriConfig from "https://js.arcgis.com/4.19/@arcgis/core/config.js";
import SceneLayer from "https://js.arcgis.com/4.19/@arcgis/core/layers/SceneLayer.js";

esriConfig.apiKey = "AAPK910bc52162d04535b4b2e399d655b842-B8-L-B-bSHMrLN2KVLmjffN-wrL_S3hXWvzpGoUceNidwHU5YxKxYF9dcKDp9xH";

const map = new Map({
    basemap: "arcgis-terrain", // https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#basemap
    ground: "world-elevation"
    //ground: "world-topobathymetry"
});

const view = new SceneView({
    container: "viewDiv",
    map: map,
    zoom: 13,
    camera: {
        position: [
            -3.300490, //long
            37.044260, //lat
            5000 // meters
        ],
        heading: 10, // Orienteación en grados (0-Norte/180-Sur)
        tilt: 57 // Inclinación de la cámara
    }
});

const madrid = new SceneLayer({
    url: 'https://tiles.arcgis.com/tiles/lnFkorfBb3ma2riJ/arcgis/rest/services/EdificiosMadrid_LOD1v2/SceneServer'
})

map.add(madrid)