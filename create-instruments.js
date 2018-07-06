
var harp = document.getElementById("harp");
var harpKeyValue = 0;
for (var row = 0; row < 3; row++) {

  for (var column = 0; column < 5; column++){

    button = document.createElement("button");

    if (harpKeyValue % 7 == 0) {
      button.innerHTML = "○⃟";
    } else if (harpKeyValue % 2 == 0){
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
