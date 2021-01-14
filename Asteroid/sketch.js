function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(20);
  ship = new Ship();
  ship.render();
}