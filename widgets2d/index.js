import Map from "https://js.arcgis.com/4.20/@arcgis/core/Map.js";
import MapView from "https://js.arcgis.com/4.20/@arcgis/core/views/MapView.js";
import esriConfig from "https://js.arcgis.com/4.20/@arcgis/core/config.js";

import Search from "https://js.arcgis.com/4.20/@arcgis/core/widgets/Search.js";

esriConfig.apiKey = "tu api key";

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
