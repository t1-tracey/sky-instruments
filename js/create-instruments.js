
var harp = document.getElementById("harp");
var harpKeyValue = 0;
for (var row = 0; row < 3; row++) {

  for (var column = 0; column < 5; column++){

    button = document.createElement("button");

    // Circle and diamonds for alternating columns, diamond + circle combined for home keys

    if (harpKeyValue % 7 == 0) {
      button.innerHTML = "○⃟";
    } else if ((harpKeyValue % 5 == 0 || harpKeyValue % 5 == 2) || (harpKeyValue % 5 == 4)) {
      button.innerHTML = "○";
    } else {
      button.innerHTML = "◇";
    };
    button.id = "harp-" + String(harpKeyValue);
    button.classList.add("keys");
    button.setAttribute("onmousedown", "harpScales[key][" + String(harpKeyValue) + "].cloneNode(true).play()");

    harp.append(button);

    harpKeyValue++;
  };
  harp.innerHTML += "<br />"
};
