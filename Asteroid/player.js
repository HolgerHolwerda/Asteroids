

function keyReleased() {
    ship.setRotation(0);
    ship.boosting(false);
}

function keyPressed() {
    if (keyCode == RIGHT_ARROW ) {//|| keyCode == 68
        ship.setRotation(0.1);
    } else if (keyCode == LEFT_ARROW ) {//|| keyCode == 65
        ship.setRotation(-0.1);
    } else if (keyCode == UP_ARROW ) {//|| keyCode == 87
        ship.boosting(true);
    } 
}

function Ship() {
    this.pos = createVector(width / 2, height / 2);
    this.r = 20
    this.direction = 0;//PI / 2; // 90 grader i radianer 
    this.rotation = 0;
    this.vel = createVector(1, 0);
    this.isBossting = false;
    this.isUltraboost = false

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
        noFill();
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
}

// til draw:
// 

