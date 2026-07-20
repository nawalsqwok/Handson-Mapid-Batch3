import { geojsonToWKT, wktToGeoJSON } from "@terraformer/wkt";
import { addBufferLayer } from "../layers/vektor";

export function storeBufferGeometry(map, event) {
    const geometry = event.features[0].geometry
    const wkt = geojsonToWKT(geometry)

    computeBuffer(map, wkt)
}

export async function computeBuffer(map, wkt){
    const response = await fetch("http://127.0.0.1:5000/geometry_manipulation/buffer", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            geometry: wkt,
            distance_m: 1000000
        })
    })

    const result = await response.json()
    const data = wktToGeoJSON(result.wkt)

    addBufferLayer(map, data)
  

    // const output = document.getElementById("buffer")
    // output.textContent = JSON.stringify(data)

    return result
}