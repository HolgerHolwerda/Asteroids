var ship;
var asteroids = [] // defining astroids as arrays
var lasers = [];
var asteroidsamount = 7;

function setup() {
  createCanvas(windowWidth, windowHeight);

  ship = new Ship();

  //This loads tutorial image
  loadtutorial();

  for (var i = 0; i < asteroidsamount; i++) {
    asteroids.push(new Asteroid());
  }// antal asteriods 
}

function draw() {
  createCanvas(windowWidth, windowHeight);
  background(20);
  boostbar();
  tutorial();
  score();

  for (var i = 0; i < asteroids.length; i++) {
    asteroids[i].render();
    asteroids[i].update();
    asteroids[i].edges();
  }

  for (var i = lasers.length - 1; i >= 0; i--) {
    lasers[i].render();
    lasers[i].update();
    for (var j = asteroids.length - 1; j >= 0; j--) {
      if (lasers[i].hits(asteroids[j])) {
        if (asteroids[j].r > 15) {
          var newAsteroids = asteroids[j].breakup();
          // debug console.log(newAsteroids);
          asteroids = asteroids.concat(newAsteroids);
        }else{
          Score += 1
        }
        if (asteroids.length <= asteroidsamount){
          asteroids.push(new Asteroid());
          asteroidsamount += 1
        }
        asteroids.splice(j, 1);
        lasers.splice(i, 1);
        break;
      }
    }
  }
  for (var i = asteroids.length - 1; i >= 0; i--) {
    if (ship.hits(asteroids[i])){
      restartUI()
    }else{
      
    }
  }
  ship.render();
  ship.turn();
  ship.update();
  ship.edges();
  ship.movement();
}