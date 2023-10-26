const videoElement = document.getElementById('#video');

videoElement.onratechange = () => {
  videoElement.playbackRate = 1;
};
