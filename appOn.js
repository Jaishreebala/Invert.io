// this is the code which will be injected into a given page...

(function () {


    document.querySelector("html").style.filter = "invert(1) hue-rotate(180deg)";
    // document.body.style.filter = "invert(1) hue-rotate(180deg)"
    let media = document.querySelectorAll("img, picture, video");
    media.forEach((mediaItem) => {
        mediaItem.style.filter = "invert(1) hue-rotate(180deg)"
    })

})();