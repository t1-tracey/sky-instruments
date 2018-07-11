var harp = document.getElementById("harp");
var harpKeyValue = 0;
for (var row = 0; row < 3; row++) {

  for (var column = 0; column < 5; column++){

    button = document.createElement("button");

    if (harpKeyValue % 7 == 0) {
      // diamond + circle for home key
      button.innerHTML = "⟐";
    } else if ((harpKeyValue % 5 == 0 || harpKeyValue % 5 == 2) || (harpKeyValue % 5 == 4)) {
      // circle for odd columns
      button.innerHTML = "○";
    } else {
      // diamond for even columns
      button.innerHTML = "◇";
    };
    button.id = "harp-" + String(harpKeyValue);
    button.classList.add("keys");
    button.setAttribute("ontouchstart", "harpScales[key][" + String(harpKeyValue) + "].play()");

    harp.append(button);

    harpKeyValue++;
  };
  harp.innerHTML += "<br />"
};
