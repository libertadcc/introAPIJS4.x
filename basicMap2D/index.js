import Map from 'https://js.arcgis.com/4.19/@arcgis/core/Map.js'
import MapView from "https://js.arcgis.com/4.19/@arcgis/core/views/MapView.js";
import esriConfig from "https://js.arcgis.com/4.19/@arcgis/core/config.js";

esriConfig.apiKey = "AAPK910bc52162d04535b4b2e399d655b842-B8-L-B-bSHMrLN2KVLmjffN-wrL_S3hXWvzpGoUceNidwHU5YxKxYF9dcKDp9xH";

const map = new Map({
    basemap: "arcgis-oceans" // https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#basemap
});

const view = new MapView({
    container: "viewDiv",
    map: map,
    // center: {
    //     latitude: 40.7353,
    //     longitude: -3.149945
    // },
    center: [-0.912743,41.634954], // long y lat
    zoom: 15
    // extent: {
    //     xmin: -6.337242,
    //     xmax: -5.675316,
    //     ymin: 40.604577,
    //     ymax: 41.001673
    // }
});

view.on('drag', (event) => console.log('drag', event));

// Ejercicio: Pintar por consola las coordenadas sobre las que se hace click (vemos eventos)
view.on('click', (event) => {
    console.log('long-lat', event.mapPoint.longitude, event.mapPoint.latitude);
    // Que la vista te lleve a esa localización cuando haces click (vemos métodos)
    view.goTo({
        center: [event.mapPoint.longitude, event.mapPoint.latitude],
        //zoom: 13
    });
    // Cambiarle el zoom (vemos propiedades)
    view.zoom = 13;
    // map.basemap = 'arcgis-navigation'
});