document.addEventListener("DOMContentLoaded", () => {
  const layers = document.querySelectorAll(".layer");
  let currentLayerIndex = 0;
  let isTransitioning = false;

  function showLayer(index) {
    layers.forEach((layer, i) => {
      if (i === index) {
        layer.classList.add("visible");
        layer.classList.remove("hidden");
      } else if (i < index) {
        layer.classList.add("hidden"); // Hide previous layers as we zoom in
      } else {
        layer.classList.remove("visible", "hidden");
      }
    });
  }

  showLayer(currentLayerIndex);

  function handleScroll(event) {
    if (isTransitioning) return;
    isTransitioning = true;

    if (event.deltaY > 0 && currentLayerIndex < layers.length - 1) {
      currentLayerIndex++;
    } else if (event.deltaY < 0 && currentLayerIndex > 0) {
      currentLayerIndex--;
    }

    showLayer(currentLayerIndex);

    setTimeout(() => {
      isTransitioning = false;
    }, 1500);
  }

  window.addEventListener("wheel", handleScroll);
});
