var noteFilenames = ['c', 'c-sharp', 'd', 'e-flat', 'e', 'f', 'f-sharp', 'g', 'a-flat', 'a', 'b-flat', 'b'];

var SOUND_FILETYPE = '.wav';
var ROOT_DIRNAME = './sounds/';

var HARP_DIRNAME = 'harp/';
var OCTAVE_LENGTH_IN_SEMITONES = 12;

var INTERVALS_IN_SEMITONES = [0, 2, 4, 5, 7, 9, 11]

function createOctave(instrument, startNoteIdx, filepaths) {

  // Return single-octave list of filepaths

  var scale = [];

  for (var intervalIdx = 0; intervalIdx < INTERVALS_IN_SEMITONES.length; intervalIdx++) {
    var interval = INTERVALS_IN_SEMITONES[intervalIdx];
    scale.push(filepaths[instrument][startNoteIdx + interval]);
  }
  return scale;
};

function createScale(instrument, startNoteIdx, filepaths) {

  if (instrument == "harp") {

    // Harp scale consists of 2 octaves (inclusive)

    var firstOctave = createOctave(instrument, startNoteIdx, filepaths);
    var secondOctave = createOctave(instrument, startNoteIdx + OCTAVE_LENGTH_IN_SEMITONES, filepaths);
    var lastNote = filepaths[instrument][startNoteIdx + (2 * OCTAVE_LENGTH_IN_SEMITONES)];

    var scale = firstOctave.concat(secondOctave);
    scale.push(lastNote);

    return scale;

  }

};

var instrumentFilepaths = {};

instrumentFilepaths["harp"] = [];

for (var octave = 2; octave < 5; octave++) {
  for (var noteIdx = 0; noteIdx < noteFilenames.length; noteIdx++) {
    var harpFilepath = ROOT_DIRNAME + HARP_DIRNAME + noteFilenames[noteIdx] + octave.toString() + SOUND_FILETYPE;
    instrumentFilepaths["harp"].push(harpFilepath);
  }
}

var instrumentScales = {};
instrumentScales["harp"] = {};

for (var keyIdx = 0; keyIdx < KEYS.length; keyIdx++) {
  harpKey = KEYS[keyIdx];
  harpScale = createScale("harp", keyIdx, instrumentFilepaths);
  instrumentScales["harp"][harpKey] = harpScale;
}
