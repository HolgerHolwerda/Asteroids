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
 
  for (var i = lasers.length-1; i >= 0; i--) {
    lasers[i].render();
    lasers[i].update();
    for (var j = asteroids.length-1; j >= 0; j--) {
      if (laser[i].hits(asteroids[j])){     
        var newAsterods = asteroids[j].breakup();
        asteroids.push(newAsteroid);
        asteroids.splice(j, 1);
        lasers.splice(i, 1);
        break;
      }
    }
  }

  ship.render();
  ship.turn();
  ship.update();
  ship.edges();
  ship.movement();

}
