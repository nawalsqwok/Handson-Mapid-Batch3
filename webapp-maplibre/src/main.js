import { Map } from 'maplibre-gl';
import { addKotaLayer } from './layers/vektor';
import { addPulauLayer } from './layers/vektor';

const mapElement = document.createElement('div');
mapElement.id = 'map';
mapElement.style.height = "300px";
document.body.appendChild(mapElement);

const map = new Map({
    container: 'map',
    style: 'https://demotiles.maplibre.org/globe.json',
    center: [107.66, -7.14],
    zoom: 1,
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

    addKotaLayer(map);
    addPulauLayer(map);

    // ----- layer raster
    map.addSource("gedungSate", {
        type: "image",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Gedung_Sate_Oktober_2024_-_Rahmatdenas.jpg/1280px-Gedung_Sate_Oktober_2024_-_Rahmatdenas.jpg",
        coordinates: [
            [107.44, -5.691], // top-left
            [110.16, -6.32], // top-right
            [111.11, -9.34], // bottom-right
            [106.38, -9.14] // bottom-left
        ] 
    })

    map.addLayer({
        id: "gedungsate-image",
        type: "raster",
        source: "gedungSate",
    })
    
})

