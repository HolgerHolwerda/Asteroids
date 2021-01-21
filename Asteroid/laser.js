function Laser(spos){  //spos er skibets position
    this.pos = createVektor(spos.x, spos.y);
    this.vel = createVektor();

    this.update = function() {
        this.pos.add(this.vel);
    }

    this.render = function() {
        Push();
        stroke(255);
        strokeWeight(4);
        Point(this.pos.x, this.pos.y);
        pop();
    }
}


// til keypressed
    // 