var ship;
var asteroids = [] // defining astroids as arrays
var lasers = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  ship = new Ship();

  loadtutorial();

  for (var i = 0; i < 7; i++){
  asteroids.push(new Asteroid());
  }
}

function draw() {
  createCanvas(windowWidth, windowHeight);
  background(20);
  boostbar();
  tutorial();
  
  for (var i = 0; i < asteroids.length; i++) {
    asteroids[i].render();
    asteroids[i].update();
    asteroids[i].edges();
  }
  
  for (var i = lasers.length-1; i >= 0; i--) {
    lasers[i].render();
    lasers[i].update();
    for (var j = asteroids.length-1; j >= 0; j--) {
      if (lasers[i].hits(asteroids[j])){     
        if (asteroids[j].r > 10) {
          var newAsteroids = asteroids[j].breakup();
          ateroids = asteroids.concat(newAsteroid);
        } 
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
