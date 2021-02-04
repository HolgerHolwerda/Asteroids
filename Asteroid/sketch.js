var ship;
var asteroids = [] // defining astroids as arrays
var lasers = [];
var asteroidsamount = 7;
var money = 0

function setup() {
  createCanvas(windowWidth, windowHeight);

  ship = new Ship();

  loadtutorial();

  for (var i = 0; i < asteroidsamount; i++) {
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
          money += 10
          print(money)
        }
        if (asteroids.length <= asteroidsamount){
          asteroids.push(new Asteroid());
          asteroidsamount += 0.1
        }
        asteroids.splice(j, 1);
        lasers.splice(i, 1);
        break;
      }
    }
  }
  for (var i = asteroids.length - 1; i >= 0; i--) {
    if (ship.hits(asteroids[i])){
      print("hit");
      restartbutton = createButton("Restart");
      restartbutton.position(windowWidth / 2, windowHeight / 2)
      restartbutton.mouseClicked(restartgame)
      stopgame()
    }else{
      
    }
  }
  ship.render();
  ship.turn();
  ship.update();
  ship.edges();
  ship.movement();


  //console.log(asteroids.length);
}
//!!!Clean Up!!!!
function restartgame(){
  window.location.reload()
}
function stopgame(){
  noLoop();
}