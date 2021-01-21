var ship;
var asteroids = [] // defining astroids as arrays
function setup() {
  createCanvas(windowWidth, windowHeight);

  ship = new Ship();
<<<<<<< HEAD
  // for (var i = 0; i < 7; i++){
  //  asteroids.push(new Asteroid());
  // }
=======
  for (var i = 0; i < 7; i++){
  asteroids.push(new Asteroid());
  }
>>>>>>> ad7a47fa3b8f0e62ed399d5b8a6d792ac03a3413
}

function draw() {
  background(20);
  ship.render();
  ship.turn();
  ship.update();
  ship.edges();
  ship.movement();
  // for (var i = 0; i < asteroids.length; i++) {
  //   asteroids[i].render();
  //   asteroids[i].update();
  //   asteroids[i].edges();
  // }

}
