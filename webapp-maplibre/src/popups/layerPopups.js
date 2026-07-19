import { Popup } from "maplibre-gl";

const popup = new Popup();

export function addKotaPopup(map, event){
    const coordinate = event.lngLat
    const longitude = coordinate.lng.toFixed(2)
    const latitude = coordinate.lat.toFixed(2)
    const properties = event.features[0].properties
    const cityName = properties.NAME

    console.log(properties)

    return popup
        .setLngLat(event.lngLat)
        .setHTML(`
            <div>
                <h3>Kota: ${cityName}</h3>
                <div>Bujur: ${longitude}</div>
                <div>Lintang: ${latitude}</div>
            </div>
            `)
        .addTo(map)
}

export function addPulauPopup(map, event){
    return popup
        .setLngLat(event.lngLat)
        .setHTML(`
            <div>
                <div id="luas"></div>
            </div>
            `)
        .addTo(map)
}

// popup.on('open', () => {
//     console.log('popup was opened');
// });

// popup.on('close', () => {
//     console.log('popup was closed');
// });
