function activateGalleryChalet () {
    let thumbnailsChalet = document.querySelectorAll("#thumbs > div > img");
    let principalChalet = document.querySelector("#chalet-principal > img");

    thumbnailsChalet.forEach(function(thumbnail) {

        thumbnail.addEventListener("click", function() {
            principalChalet.src = thumbnail.src

        })

    })

}

