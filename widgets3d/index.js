import Map from 'https://js.arcgis.com/4.19/@arcgis/core/Map.js'
import SceneView from "https://js.arcgis.com/4.19/@arcgis/core/views/SceneView.js";
import DirectLineMeasurement3D from "https://js.arcgis.com/4.19/@arcgis/core/widgets/DirectLineMeasurement3D.js";
import ElevationProfile from "https://js.arcgis.com/4.19/@arcgis/core/widgets/ElevationProfile.js";
import esriConfig from "https://js.arcgis.com/4.19/@arcgis/core/config.js";

esriConfig.apiKey = "AAPK910bc52162d04535b4b2e399d655b842-B8-L-B-bSHMrLN2KVLmjffN-wrL_S3hXWvzpGoUceNidwHU5YxKxYF9dcKDp9xH";

const map = new Map({
    basemap: "satellite", // https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#basemap
    ground: "world-elevation"
    //ground: "world-topobathymetry"
});

const view = new SceneView({
    container: "viewDiv",
    map: map,
    zoom: 6,
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

let measurementWidget = new DirectLineMeasurement3D({
    view: view
});

view.ui.add(measurementWidget, "top-right");

const elevationProfile = new ElevationProfile({
    view: view
});
// adds the ElevationProfile to the top right corner of the view
view.ui.add(elevationProfile, "bottom-right");