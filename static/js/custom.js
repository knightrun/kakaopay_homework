let viewportSize, viewportOffset;

function getViewportSize() {
  return {
    width: window.innerWidth,
    height: window.innerHeight
  }
}

function getViewportOffset() {
  return {
    top:  window.pageYOffset || document.documentElement.scrollTop   || document.body.scrollTop,
    left: window.pageXOffset || document.documentElement.scrollLeft  || document.body.scrollLeft
  }
}

function addEvent() {
  window.addEventListener('load', function() {
    viewportSize = viewportOffset = null;
  })
}

function onLoad() {
  addEvent();
}

window.addEventListener('load', function() {
  onLoad();
})