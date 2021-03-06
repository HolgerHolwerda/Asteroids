
function Asteroid(pos, r) {
    if (pos) {
        this.pos = pos.copy();
    } else {
        this.pos = createVector(random(width), random(height))// Random possining of astroids
    }
    if (r) {
        this.r = r * 0.5;
    } else {
        this.r = random(15, 50); // generer tilfædig radius til asteroids
    }

    this.vel = p5.Vector.random2D();// tilfældig vektorer til vinklerne af asteriods
    this.total = floor(random(5, 15));
    this.offset = [];
    for (var i = 0; i < this.total; i++) {
        this.offset[i] = random(-this.r * 0.5, this.r * 0.5);
    }
    this.update = function () {
        this.pos.add(this.vel);

    }
    this.render = function () {
        push(); // push and pop er for at ''indspære'' en kode til at virke kun på det der er inden i dem
        stroke(255);
        noFill();
        translate(this.pos.x, this.pos.y);
        //elipse(0,0,this.r * 2);
        beginShape();
        for (var i = 0; i < this.total; i++) {
            var angle = map(i, 0, this.total, 0, TWO_PI);//TWO_PI = 360 degree
            var r = this.r + this.offset[i]
            var x = r * cos(angle);
            var y = r * sin(angle);
            vertex(x, y)
        }
        endShape(CLOSE);
        pop();

    }

    this.breakup = function () {
        var newA = [];
        newA[0] = new Asteroid(this.pos, this.r);
        newA[1] = new Asteroid(this.pos, this.r);
        return newA;
    }

    this.edges = function () { // dette her gøre at man astroids ikke følger efter playeren 
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
}