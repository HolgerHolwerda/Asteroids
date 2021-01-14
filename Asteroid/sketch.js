var asteroids = [] // defining astroids as arrays

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  ship = new Ship();
 // asteroids.push(new Asteroid());
}

function draw() {
  background(20);
  ship.render();
  ship.turn();


  for (var i = 0; i < asteroids.length; i++){
    asteroids[i].render();
  }

}