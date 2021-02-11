//variable for the image
let img;
//variables to make the scaling of the tutorial
let a = 0.0;
let s = 0.0;
//made to stop tutorial
let istutorialkey = false

var Score = 0;

function boostbar() {
    push()
    fill(0)
    rect(20, 20, 100, 20);
    fill(0)
    fill(255)
    rect(20, 20, boostCounter * 10, 20);
    fill(255)
    pop()
}
function loadtutorial() {
    img = loadImage("UI/Keys.png");
}
function tutorial() {
    push()
    if (keyCode == RIGHT_ARROW || keyCode == 68 || keyCode == LEFT_ARROW || keyCode == 65 || keyCode == UP_ARROW || keyCode == 87) {
        istutorialkey = true
    }
    if (istutorialkey == false) {
        //calculate the scaleing between -1.1 and 1.1
        a = a + 0.04;
        s = cos(a) * 1.1
        if (s > 1) {
            translate(windowWidth / 2, 60);
            imageMode(CENTER)
            scale(s);
            image(img, 0, 0, img.width / 2, img.height / 2);
        } else {
            imageMode(CENTER)
            image(img, windowWidth / 2, 60, img.width / 2, img.height / 2);
        }
    }
    pop()
}
function score(){
    
    textSize(30);
    fill(255);
    textAlign(CENTER);
    text("Score : " + Score, width - 200, 50);
}
function restartUI(){
    restartbutton = createButton("Restart");
    restartbutton.position(windowWidth / 2 - windowWidth / 10, windowHeight / 2 - windowHeight / 10)
    restartbutton.size(windowWidth / 5, windowHeight / 20)
    restartbutton.style("font-size","35px")
    restartbutton.mouseClicked(restartgame)
    stopgame()
}

function restartgame(){
    window.location.reload()
  }
  function stopgame(){
    noLoop();
  }