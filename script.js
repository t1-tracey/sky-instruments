var KEYS = ['C', 'C♯', 'D', 'E♭', 'E', 'F', 'F♯', 'G', 'A♭', 'A', 'B♭', 'B'];

var noteFilenames = ['c', 'c-sharp', 'd', 'e-flat', 'e', 'f', 'f-sharp', 'g', 'a-flat', 'a', 'b-flat', 'b'];
var INTERVALS_IN_SEMITONES = [0, 2, 4, 5, 7, 9, 11] // Base, 2nd, 3rd, 4th, 5th 6th, 7th
var SOUND_FILETYPE = '.wav';
var ROOT_DIRNAME = './sounds/';
var HARP_DIRNAME = 'harp/';
var OCTAVE_LENGTH_IN_SEMITONES = 12;

// Create Audios for all notes and put into a list
var noteAudios = [];

//TODO: change numbers here 4-7, when i get actual samples
for (var octave = 2; octave < 5; octave++) {
  for (var noteIdx = 0; noteIdx < noteFilenames.length; noteIdx++) {
    var noteFilepath = ROOT_DIRNAME + HARP_DIRNAME + noteFilenames[noteIdx] + octave.toString() + SOUND_FILETYPE;
    var noteAudio = new Audio(noteFilepath);
    noteAudios.push(noteAudio);
  };
};

// Create harp scale
// Key , audios
var harpScales = {};

for (keyIdx = 0; keyIdx < KEYS.length; keyIdx++) {
  key = KEYS[keyIdx];
  scale = createHarpScale(keyIdx, noteAudios);
  harpScales[key] = scale;
};

console.log(harpScales);

function createOctaveScale(baseNoteIdx, audios) {

  // Return single-octave list of audios

  var scale = [];

  for (var intervalIdx = 0; intervalIdx < INTERVALS_IN_SEMITONES.length; intervalIdx++) {
    var interval = INTERVALS_IN_SEMITONES[intervalIdx];
    scale.push(noteAudios[baseNoteIdx + interval]);
  }
  return scale;
};

function createHarpScale(baseNoteIdx, audios) {

  // Harp scale consists of 2 octaves (inclusive)

  var firstOctave = createOctaveScale(baseNoteIdx, audios);
  var secondOctave = createOctaveScale(baseNoteIdx + OCTAVE_LENGTH_IN_SEMITONES, audios);
  var lastNote = audios[baseNoteIdx + (2 * OCTAVE_LENGTH_IN_SEMITONES)];

  var scale = firstOctave.concat(secondOctave);
  scale.push(lastNote);

  return scale;
};


//TODO: Create buttons
// getElementById('harp')
/*for (var row = 0; row < 3; row++) {

};*/

//TODO: Fix for Bass
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
