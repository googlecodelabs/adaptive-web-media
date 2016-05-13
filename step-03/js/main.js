'use strict';

var videoElement = document.querySelector('video');

console.log(videoElement.canPlayType('fubar'));
console.log(videoElement.canPlayType('video/webm'));
console.log(videoElement.canPlayType('video/webm; codecs="vp8"'));

console.log(videoElement.currentSrc);

videoElement.onloadedmetadata = function() {
  console.log(this.videoWidth);
  console.log(this.videoHeight);
};
