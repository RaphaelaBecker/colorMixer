const red = document.getElementById("redMixer");
const green = document.getElementById("greenMixer");
const blue = document.getElementById("blueMixer");
const value = document.querySelector("#color-value");

red.addEventListener("input", updateColor);

green.addEventListener("input", updateColor);

blue.addEventListener("input", updateColor);

function updateColor() {
  const backgroundColor = `rgb(${red.value}, ${green.value}, ${blue.value})`;
  document.body.style.backgroundColor = backgroundColor;
  value.innerText =
    "#" + hexColor(red.value) + hexColor(green.value) + hexColor(blue.value);
}

function hexColor(c) {
  if (c < 256) {
    return Math.abs(c).toString(16);
  }
  return 0;
}

updateColor();
