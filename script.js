var KEYS = ['C', 'C♯', 'D', 'E♭', 'E', 'F', 'F♯', 'G', 'A♭', 'A', 'B♭', 'B'];

var noteFilenames = ['c', 'c-sharp', 'd', 'e-flat', 'e', 'f', 'f-sharp', 'g', 'a-flat', 'a', 'b-flat', 'b'];
var INTERVALS_IN_SEMITONES = [0, 2, 4, 5, 7, 9, 11] // Base, 2nd, 3rd, 4th, 5th 6th, 7th
var SOUND_FILETYPE = '.wav';
var ROOT_DIRNAME = './sounds/';
var HARP_DIRNAME = 'harp/';
var OCTAVE_LENGTH_IN_SEMITONES = 12

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

noteAudios[24].play();

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


var keySlider = document.getElementById('keySlider');
var output = document.getElementById('key');

var key = KEYS[keySlider.value];
output.innerHTML = key;

// Update key slider when dragged
keySlider.oninput = function() {
  key = KEYS[this.value];
  output.innerHTML = key;
}
