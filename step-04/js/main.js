'use strict';

var video = window.video = document.querySelector('video');

var url = 'video/bunny.webm';

function getVideo(end) {
  var range = 'bytes=' + 0 + '-' + end;
  console.log('range: ', range);
  var options = {
    headers: {
      'Content-Type': 'video/webm',
      'Range': range
    }
  };
  fetch(url, options).then(function(response) {
    return response.blob();
  }).then(function(blob) {
    video.src = window.URL.createObjectURL(blob);
  });
}

for (var i = 1; i !== 59; ++i) {
  var chunkSize = 50000;
  getVideo(i * chunkSize);
}
