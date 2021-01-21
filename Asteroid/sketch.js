var ship;
var asteroids = [] // defining astroids as arrays
var lasers = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  ship = new Ship();

  for (var i = 0; i < 7; i++){
  asteroids.push(new Asteroid());
  }
}

function draw() {
  background(20);
  boostbar()
  for (var i = 0; i < asteroids.length; i++) {
    asteroids[i].render();
    asteroids[i].update();
    asteroids[i].edges();
  }
  ship.render();
  ship.turn();
  ship.update();
  ship.edges();
  ship.movement();
  for (var i = 0; i < lasers.length; i++) {
    lasers[i].render();
    lasers[i].update();
  }
}
