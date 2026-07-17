export function addGedungsateImage(map){
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
}

  // ----- layer raster
    
