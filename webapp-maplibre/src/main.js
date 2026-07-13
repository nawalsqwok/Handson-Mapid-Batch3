import {Map} from 'maplibre-gl';
import naturalEarthData from "./data/ne.geojson?url";

const mapElement = document.createElement('div');
mapElement.id = 'map';
mapElement.style.height = "300px";
document.body.appendChild(mapElement);

const map = new Map({
    container: 'map',
    style: 'https://demotiles.maplibre.org/globe.json',
    center: [107.66, -7.14],
    zoom: 7,
});

// const data = {
//   "type": "FeatureCollection",
//   "features": [
//     {
//       "type": "Feature",
//       "properties": {
//         "Name": "Jakarta"
//       },
//       "geometry": {
//         "type": "Point",
//         "coordinates": [
//           106.8411325,
//           -6.2728788
//         ]
//       }
//     }
//   ]
// }

map.on("load",() => {
   map.addSource('kota', {
    type: 'geojson',
    data: "https://geoserver.mapid.io/layers_new/get_layer?api_key=974a5e4528be40a0ab5580ecdc4c0ffb&layer_id=6a4a63953b4813529f28b80e&project_id=6a4a633e3b4813529f28a868"
})
map.addLayer({
    id: "titik-kota",
    type: "circle",
    source: "kota",
    paint: {
        "circle-radius": 7,
        "circle-color": "yellow",
        "circle-stroke-width": 1,
        "circle-stroke-color": "black"
    }
    })    
})

