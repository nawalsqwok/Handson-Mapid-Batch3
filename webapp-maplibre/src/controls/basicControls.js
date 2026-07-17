import { AttributionControl } from "maplibre-gl"

export function addAttribution(map, att){
    map.addControl(new AttributionControl({
        compact: true,
        customAttribution: att
    }))
}