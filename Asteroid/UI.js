let img;

function boostbar(){
    push()
    fill(0)
    rect(20,20,100,20);
    fill(0)
    fill(255)
    rect(20,20,boostCounter * 10,20);
    fill(255)
    pop()
}
function loadtutorial(){
    img = loadImage("UI/Keys.png");
}
function tutorial(){
    image(img, windowWidth/2, 20, img.width / 2, img.height / 2);
}