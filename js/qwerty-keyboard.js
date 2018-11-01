var KEY_MAPPINGS = {
  "Q": 0, "W": 1, "E": 2, "R": 3, "T": 4,
  "A": 5, "S": 6, "D": 7, "F": 8, "G": 9,
  "Z": 10, "X": 11, "C": 12, "V": 13, "B": 14
};

window.addEventListener("keydown", checkKeyPressed, false);

function checkKeyPressed(evt) {

    validKeyPressed = true;

    switch (evt.keyCode) {

      case 81:
        keyPressed = "Q";
        break;
      case 87:
        keyPressed = "W";
        break;
      case 69:
        keyPressed = "E";
        break;
      case 82:
        keyPressed = "R";
        break;
      case 84:
        keyPressed = "T";
        break;
      case 65:
        keyPressed = "A";
        break;
      case 83:
        keyPressed = "S";
        break;
      case 68:
        keyPressed = "D";
        break;
      case 70:
        keyPressed = "F";
        break;
      case 71:
        keyPressed = "G";
        break;
      case 90:
        keyPressed = "Z";
        break;
      case 88:
        keyPressed = "X";
        break;
      case 67:
        keyPressed = "C";
        break;
      case 86:
        keyPressed = "V";
        break;
      case 66:
        keyPressed = "B";
        break;

      default:
        validKeyPressed = false;
    }

    if (validKeyPressed) {
      playInstrument(instrumentScales, "harp", key, KEY_MAPPINGS[keyPressed]);
    };
}
