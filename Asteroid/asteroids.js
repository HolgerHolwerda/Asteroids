
function Asteroid(){
    this.pos = createVector(random(width), random(height))
    this.r = random(5, 20);
    this.total = floor(random(5, 15));
    this.offset = [];
    for (var i = 0; i < total; i++)
    this.offset = random (-5, 12)

    this.render = function(){
        push();
        stroke(255);
        noFill();
        translate(this.pos.x, this.s.y);
        //elipse(0,0,this.r * 2);
        beginShape();
        for (var i = 0;i < this.total; i++) {
            var angle = map(i, 0, this.total, 0, TWO_PI);//TWO_PI = 360 degree
            var r = this.r + this.offset[i]
            var x = r * cos(angle);
            var y = this.r * sin(angle);
            vertex(x, y) 
        }
        endShape(CLOSE);
        pop();

    }
}