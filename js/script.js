var KEYS = ['C', 'C♯', 'D', 'E♭', 'E', 'F', 'F♯', 'G', 'A♭', 'A', 'B♭', 'B'];




// Key slider
var keySlider = document.getElementById('keySlider');
var output = document.getElementById('key');

var key = KEYS[keySlider.value];
output.innerHTML = key;

// Update key slider when dragged
keySlider.oninput = function() {
  key = KEYS[this.value];
  output.innerHTML = key;
};
