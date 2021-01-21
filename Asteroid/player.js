function keyReleased() {
    //ship.setRotation(0);
    ship.boosting(false);
    //ship.ultraboost(false);
    if (keyCode == RIGHT_ARROW || keyCode == 68) {
        isRight = false
    }
    if (keyCode == LEFT_ARROW || keyCode == 65) {
        isLeft = false
    }
    if (keyCode == UP_ARROW || keyCode == 87) {
      isUp = false
    }
  }
  
  function keyPressed() {
    if (keyCode == RIGHT_ARROW || keyCode == 68) {
        isRight = true;
    }
    if (keyCode == LEFT_ARROW || keyCode == 65) {
        isLeft = true;
    }
    if (keyCode == UP_ARROW || keyCode == 87) {
        isUp = true
    }
    if(keyCode == 32){
        if(boostCounter >= 10){
            //Her bliver ultraboost brugt og ændre farven på skibet
            ship.ultraboost(true);
            boostCounter = 0;
            fill(0);
        }
    }
  }
  //denne funktion bliver kaldt hvert sekundt
   function boostTimer(){
    boostCounter++;
    if(count >= 10) fill(255) //boost muligt derfor ændre farve på Player/skibet
}

function Ship() {
    this.pos = createVector(width / 2, height / 2);
    this.r = 20
    this.direction = 0;//PI / 2; // 90 grader i radianer 
    this.rotation = 0;
    this.vel = createVector(1, 0);
    this.isBossting = false;
    this.isUltraboost = false;
    isUp = false;
    isRight = false;
    isLeft = false;
    boostCounter = 10
    setInterval(boostTimer, 1000);

    this.boosting = function (b) {
        this.isBoosting = b;
    }

    this.Ultraboosting = function (b) {
        this.isUltraboost = b
    }

    this.update = function () {
        if (this.isBoosting) {
            this.boost();
        }
        if (this.isUltraboosting) {
            this.ultraboost();
        }
        this.pos.add(this.vel);
        this.vel.mult(0.99);
    }

    this.boost = function () {
        var force = p5.Vector.fromAngle(this.direction);
        force.mult(0.1);
        this.vel.add(force);
    }

    this.ultraboost = function () {
        var force = p5.Vector.fromAngle(this.direction);
        force.mult(4);
        this.vel.add(force);
    }

    this.render = function () {
        translate(this.pos.x, this.pos.y);
        rotate(this.direction + PI / 2); // pi/2 er 90 grader i radianer
        //noFill();
        stroke(255);
        triangle(-this.r, this.r, this.r, this.r, 0, -this.r);
    }

    this.edges = function () {
        if (this.pos.x > width + this.r) {
            this.pos.x = -this.r;
        } else if (this.pos.x < -this.r) {
            this.pos.x = width + this.r;
        }
        if (this.pos.y > height + this.r) {
            this.pos.y = -this.r;
        } else if (this.pos.y < -this.r) {
            this.pos.y = height + this.r;
        }
    }

    this.setRotation = function (a) {
        this.rotation = a;
    }

    this.turn = function () {
        this.direction += this.rotation;
    }

    this.movement = function() {
        if (isUp) {
            push();
            ship.boosting;
            pop();
        }
        ship.boosting(isUp)

        if (isRight) {
            ship.setRotation (0.1);
        }

        if (isLeft) {
            ship.setRotation (-0.1);
        }
        if (!isLeft && !isRight || isLeft && isRight) {
            ship.setRotation (0);
        }

    }
}

// til draw:
// 

