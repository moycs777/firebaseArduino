var five = require("johnny-five"),
  board, led;

var Firebase = require('firebase');
var myFirebaseRef = new Firebase('https://moy.firebaseio.com/');

myFirebaseRef.set({
              led: "ON desde node",
              
              
            });

var ledStatus = 'led.shown';

//myRootRef.set( ledStatus);

console.log('running on ');

console.log(myFirebaseRef+' ok');


board = new five.Board();

board.on("ready", function() {

  // Create a standard `led` hardware instance
  led = new five.Led({
    pin: 13
  });

  // "on" turns the led _on_
  led.on();

  // "off" turns the led _off_
  led.off();

  led.on();
  

  // Turn the led back on after 3 seconds (shown in ms)
  this.wait(3000, function() {

    
    led.off();

  });
});



console.log('end');
