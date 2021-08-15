export default function ajaxLoader(url, onLoaded, onProgress) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.responseType = "arraybuffer";
  xhr.onprogress = function (e) {
    if (e.lengthComputable) {
      var percentage = Math.round((e.loaded / e.total) * 100);
      if (onProgress) {
        onProgress(percentage);
      }
    }
  };
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      var stream = xhr.response;
      if (onLoaded) {
        onLoaded(stream);
      }
    }
  };
  xhr.send();
}
