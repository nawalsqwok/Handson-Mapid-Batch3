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
  