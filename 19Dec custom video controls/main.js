var vid = document.querySelector("#vid");
var playBtn = document.querySelector(".play_btn");
var playIcon = document.querySelector("#play_icon");

playBtn.addEventListener("click", function () {
  console.log(vid.paused);
  if (vid.paused) {
    vid.play();
    playIcon.classList.remove( "fa-thin", "fa-play");
    playIcon.classList.add( "fa-regular", "fa-pause");
  } else {
    vid.pause();
    playIcon.classList.add( "fa-thin", "fa-play");
  }
});


const muteBtn = document.querySelector(".mute_btn");
const volume = document.querySelector("#volume_icon");
muteBtn.addEventListener("click", function () {

  if (vid.muted === false) {
    vid.muted = true;
        volume.classList.remove("fa","fa-volume-off");
        volume.classList.add("fa","fa-volume-up");
  } else {
    volume.classList.remove("fa","fa-volume-up")  
    volume.classList.add("fa","fa-volume-off");
    vid.muted = false;
  }
});

const volumeBar = document.querySelector("#volume_bar")
volumeBar.addEventListener("change", function() {
  vid.volume = volumeBar.value;
});