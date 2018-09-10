var harp = document.getElementById("harp");
var harpKeyID = 0;
for (var row = 0; row < 3; row++) {

  for (var column = 0; column < 5; column++){

    button = document.createElement("button");

    if (harpKeyID % 7 == 0) {
      // diamond + circle for home key
      button.innerHTML = "⟐";
    } else if ((harpKeyID % 5 == 0 || harpKeyID % 5 == 2) || (harpKeyID % 5 == 4)) {
      // circle for odd columns
      button.innerHTML = "○";
    } else {
      // diamond for even columns
      button.innerHTML = "◇";
    };
    button.id = "harp-" + String(harpKeyID);
    button.classList.add("keys");
    button.setAttribute("onmousedown", "playInstrument(instrumentScales, \"harp\", key, " + String(harpKeyID) + ")");
    button.setAttribute("ontouchstart", "playInstrument(instrumentScales, \"harp\", key, " + String(harpKeyID) + ")");

    harp.append(button);

    harpKeyID++;
  };
  harp.innerHTML += "<br />"
};
