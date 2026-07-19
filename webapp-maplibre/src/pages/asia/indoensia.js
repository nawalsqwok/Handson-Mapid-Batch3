import { Map } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css'
import { addKotaLayer, addPulauLayer } from '../../layers/vektor';
import { addAttribution } from '../../controls/basicControls';
import { LogoJabarControl } from '../../controls/customLogoControl';


const mapElement = document.createElement('div');
mapElement.id = 'map';
mapElement.style.height = "300px";
document.body.appendChild(mapElement);

const map = new Map({
    container: 'map',
    style: 'https://basemap.mapid.io/styles/dark/style.json?key=6a15c3949b6fba880a625159',
    center: [107.66, -7.14],
    zoom: 1,
    attributionControl: false
});



map.on("load",() => {
    
    addKotaLayer(map);
    addPulauLayer(map);
})

// ---- control setting

addAttribution(map, "Natural Earth");
map.addControl(new LogoJabarControl(), "top-left")