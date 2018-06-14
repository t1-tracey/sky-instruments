var KEYS = ["C", "C♯", "D", "E♭", "E", "F", "F♯", "G", "A♭", "A", "B♭", "B"];

var c1_audio = new Audio('./sounds/c1.wav');

var keySlider = document.getElementById("keySlider");
var output = document.getElementById("key");

var key = KEYS[keySlider.value];
output.innerHTML = key;

keySlider.oninput = function() {
  var key = KEYS[this.value];
  output.innerHTML = key;
}
