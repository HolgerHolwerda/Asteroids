var asteroids = [] // defining astroids as arrays
function setup() {
  createCanvas(windowWidth,windowHeight);
  asteroids.push(new Asteroid());
}

function draw() {
  background(20);
  ship = new Ship();
  ship.render();
  for (var i = 0; i < asteroids.length; i++){
    asteroids[i].render();
  }

}