var five = require("johnny-five"),
  board, led;

var Firebase = require('firebase');

var myFirebaseRef = new Firebase('https://moy.firebaseio.com/');

myFirebaseRef.set({
              led: "ON desde node",
});


//myRootRef.set( ledStatus);

console.log(myFirebaseRef+' ok');

myFirebaseRef.child("led").on("value", function(snapshot) {
  console.log(snapshot.val());  // Alerts "San Francisco"
});

//Jonny-five section
    // or "./lib/johnny-five" when running from the source
    board = new five.Board();

board.on("ready", function() {

  (new five.Led(13));

  led = new five.Led({
    pin: 13
  });

  // "on" turns the led _on_
  led.on();

   myFirebaseRef.child("led").on("value", function(snap) {
    if(snap.val() == "on desde html") {
      led.on();
    } else {
      led.off();
    }
  })

});

