var KEYS = ['C', 'C♯', 'D', 'E♭', 'E', 'F', 'F♯', 'G', 'A♭', 'A', 'B♭', 'B'];

var C4Audio = new Audio('./sounds/c4.wav');
var D4Audio = new Audio('./sounds/d4.wav');
var E4Audio = new Audio('./sounds/e4.wav');
var F4Audio = new Audio('./sounds/f4.wav');
var G4Audio = new Audio('./sounds/g4.wav');
var A4Audio = new Audio('./sounds/a4.wav');
var B4Audio = new Audio('./sounds/b4.wav');

var C5Audio = new Audio('./sounds/c5.wav');
var D5Audio = new Audio('./sounds/d5.wav');
var E5Audio = new Audio('./sounds/e5.wav');
var F5Audio = new Audio('./sounds/f5.wav');
var G5Audio = new Audio('./sounds/g5.wav');
var A5Audio = new Audio('./sounds/a5.wav');
var B5Audio = new Audio('./sounds/b5.wav');

var C6Audio = new Audio('./sounds/c6.wav');


var keySlider = document.getElementById('keySlider');
var output = document.getElementById('key');

var key = KEYS[keySlider.value];
output.innerHTML = key;

keySlider.oninput = function() {
  var key = KEYS[this.value];
  output.innerHTML = key;
}
