/**
 * fil: audio.js
 * eksempel fra Bror Arnfast
 **/

window.addEventListener("scroll", function () {

    var myVideo = document.getElementById("myvideo"); // select video
    var video = document.getElementById("video");
    console.log("Er div #video synlig? " + elFllVsbl(video));

    if (elFllVsbl(video)) {
        if (!(myVideo.curentTime > 0)) {
            myVideo.play(); // play video
        }
    } else {
        myVideo.pause();
    }
})

function elFllVsbl(el) {
    return (el.getBoundingClientRect().top >= -450 && el.getBoundingClientRect().bottom < window.innerHeight + 450);
}
