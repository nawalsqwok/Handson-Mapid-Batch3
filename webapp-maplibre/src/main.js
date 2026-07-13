import {Map} from 'maplibre-gl';
import naturalEarthData from "./data/ne.geojson?url";
import areaData from "./data/area.geojson?url"

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


// ----- layer vektor titik

map.on("load",() => {
   map.addSource('kota', {
    type: 'geojson',
    data: naturalEarthData
})

// ------ layer vector polygon
map.addSource('pulau', {
        type: "geojson",
        data: areaData,
    })

    map.addLayer({
        id: "area-pulau",
        type: "fill",
        source: "pulau",
        paint: {
            "fill-color": "green",
            "fill-outline-color": "black"
        }
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

