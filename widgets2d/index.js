import Map from "https://js.arcgis.com/4.20/@arcgis/core/Map.js";
import MapView from "https://js.arcgis.com/4.20/@arcgis/core/views/MapView.js";
import esriConfig from "https://js.arcgis.com/4.20/@arcgis/core/config.js";

import Search from "https://js.arcgis.com/4.20/@arcgis/core/widgets/Search.js";
import Locate from "https://js.arcgis.com/4.20/@arcgis/core/widgets/Locate.js";
import Graphic from "https://js.arcgis.com/4.20/@arcgis/core/Graphic.js";

esriConfig.apiKey = "AAPK38d0654e1eb749b7b6cfc3079bbfdf44KkQ5OBC4rat6o-i1VOw7ZF1KBDM5dz15O0LTwwLLOdzqFeLwVopKBOQQ0Z-qP4VJ";

const map = new Map({
    basemap: "arcgis-navigation" // https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#basemap
});

const view = new MapView({
    container: "viewDiv",
    map: map,
    center: [-0.912743, 41.634954],
    zoom: 15
});

var searchWidget = new Search({
    view: view
});

view.ui.add(searchWidget, {
    position: "top-right"
});

let locateWidget = new Locate({
    view: view,   
    // Sustituir simbología por defecto
    // graphic: new Graphic({
    //     symbol: {
    //         //type: "simple-marker" // Símbolo documentación
    //         type: "simple-marker",
    //         style: "diamond",
    //         outline: { color: [241, 14, 14, 0.55] },
    //         angle: 103,
    //         color: [10, 15, 207, 0.87]
    //     }
    // })
});

view.ui.add(locateWidget, "top-right");

// + BasemapGalley