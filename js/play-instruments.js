function playInstrument(scales, instrument, key, noteID) {

  var instrumentAudio = document.createElement("audio");
  instrumentAudio.src = scales[instrument][key][noteID];

  instrumentAudio.addEventListener("ended", function () {
      document.removeChild(this);
  }, false);

  instrumentAudio.play();

  /*try {
    instrumentAudio.play();
  }
  catch(exception) {
    if (exception instanceof NotFoundError) {

    };
  }*/



};

/*document.addEventListener('touchmove', function(e) {
   // Iterate through the list of touch points that changed
   // since the last event and print each touch point's identifier.
   for (var i=0; i < e.changedTouches.length; i++) {
     console.log("changedTouches[" + i + "].identifier = " + e.changedTouches[i].identifier);
   }
}, false);*/
