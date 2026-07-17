import { Map } from 'maplibre-gl';
import { addKotaLayer } from './layers/vektor';
import { addPulauLayer } from './layers/vektor';
import { addGedungsateImage } from './layers/raster';


const mapElement = document.createElement('div');
mapElement.id = 'map';
mapElement.style.height = "300px";
document.body.appendChild(mapElement);

const map = new Map({
    container: 'map',
    style: 'https://demotiles.maplibre.org/globe.json',
    center: [107.66, -7.14],
    zoom: 1,
    attributionControl: false
});

map.on("load",() => {

    addKotaLayer(map);
    addPulauLayer(map);
    addGedungsateImage(map)
});

// ---- contorl setting

