import naturalEarthData from "../data/ne.geojson?url";
import areaData from "../data/area.geojson?url"

export function addKotaLayer (map){
//----------- layer vector titik
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
}

export function addPulauLayer(map){
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

}


export function addBufferLayer(map, data){
    const fid = getRandomInt(1, 1000)
    // Layer Vektor - Poligon
    map.addSource(String(fid), {
        type: "geojson",
        data: data
    })

    map.addLayer({
        id: `area-${fid}`,
        type: "fill",
        source: String(fid),
        paint: {
        "fill-color": "blue",
        "fill-outline-color": "black"
        }
    })
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}