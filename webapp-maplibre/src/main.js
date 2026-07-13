import {Map} from 'maplibre-gl';
import naturalEarthData from "./data/ne.geojson?url";

const mapElement = document.createElement('div');
mapElement.id = 'map';
mapElement.style.height = "300px";
document.body.appendChild(mapElement);

const map = new Map({
    container: 'map',
    style: 'https://demotiles.maplibre.org/globe.json',
    center: [106.89, -6.19],
    zoom: 5,
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
    data: naturalEarthData
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

