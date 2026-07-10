import { Map } from 'maplibre-gl';
import naturalEarthData from "./data/ne.geojson?url";

const mapElement = document.createElement('div');
mapElement.id = 'map';
mapElement.style.height = "300px";
document.body.appendChild(mapElement);

const map = new Map({
  container: 'map',
  style: 'https://demotiles.maplibre.org/globe.json',
  center: [106.89, -6.19],
  zoom: 1
});

// const data = {
//   "type": "FeatureCollection",
//   "features": [
//     {
//       "type": "Feature",
//       "properties": {
//         "name": "Jakarta"
//       },
//       "geometry": {
//         "type": "Point",
//         "coordinates": [
//           106.3343232,
//           -6.1416728
//         ]
//       }
//     }
//   ]
// }


map.on("load", () => {

  map.addSource('kota', {
    type: 'geojson',
    data: naturalEarthData
  });
  
  map.addLayer({
    id: "titik-kota",
    type: "circle",
    source: "kota",
    paint: {
      "circle-radius": 5,
      "circle-color": "blue",
      "circle-stroke-width": 1,
      "circle-stroke-color": "black"
    }
  })

})