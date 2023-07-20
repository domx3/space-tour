

function resizeRendererToDisplaySize(renderer, sizes) {
  const canvas = renderer.domElement;
  sizes.width = canvas.clientWidth;
  sizes.height = canvas.clientHeight;
  const needResize = canvas.width !== sizes.width || canvas.height !== sizes.height;
  if (needResize) {
      renderer.setSize(sizes.width, sizes.height, false);
  }
  return needResize;
}

function openFullscreen() {
  const elem = document.body;
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}

export {resizeRendererToDisplaySize, openFullscreen, closeFullscreen}