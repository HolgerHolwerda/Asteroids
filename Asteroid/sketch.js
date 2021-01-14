var asteroids = [] // defining astroids as arrays

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  ship = new Ship();
 //for (var i = 0; i < 7; i++){
 // asteroids.push(new Asteroid());
 //}
}

function draw() {
  background(20);
  ship.render();
  ship.turn();
  ship.update();


  for (var i = 0; i < asteroids.length; i++){
    asteroids[i].render();
  }

}