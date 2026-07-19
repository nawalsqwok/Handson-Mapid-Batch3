import { 
    Map, 
    FullscreenControl, 
    GlobeControl, 
    LogoControl } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css'
import { addKotaLayer } from './layers/vektor';
import { addPulauLayer } from './layers/vektor';
import { addGedungsateImage } from './layers/raster';
import { addAttribution } from './controls/basicControls';
import { LogoJabarControl } from './controls/customLogoControl';
import { addKotaPopup, addPulauPopup } from './popups/layerPopups';
import { storeAreaGeometry } from './engine/areaTool';

const mapElement = document.createElement('div');
mapElement.id = 'map';
mapElement.style.height = "300px";
document.body.appendChild(mapElement);

const map = new Map({
    container: 'map',
    style: 'https://demotiles.maplibre.org/globe.json',
    center: [107.66, -7.14],
    zoom: 1,
    attributionControl: false,
    cooperativeGestures: true
});


map.on("load",() => {
    
    addKotaLayer(map);
    addPulauLayer(map);
    addGedungsateImage(map)
});

map.on("click", "titik-kota", function(event){
    addKotaPopup(map, event)
})

map.doubleClickZoom.disable();

map.on("click", "area-pulau", function(event){
    addPulauPopup(map, event)
    storeAreaGeometry(event)
})

// addKotaPopup(map);

// ---- control setting

addAttribution(map, "Natural Earth, Pemrpov Jawa Barat");
map.addControl(new FullscreenControl());
map.addControl(new GlobeControl());
map.addControl(new LogoControl({compact: false}));
map.addControl(new LogoJabarControl(), 'top-left')
