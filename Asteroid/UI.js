//variable for the image
let img;
//variables to make the scaling of the tutorial
let a = 0.0;
let s = 0.0;

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
    push()
    //calculate the scaleing between -1.1 and 1.1
    a = a +0.04;
    s = cos(a)* 1.1
    if(s > 1){
        translate(windowWidth/2, 60);
        imageMode(CENTER)
        scale(s);
        image(img, 0,0, img.width / 2, img.height / 2);
    }else{
        imageMode(CENTER)
        image(img, windowWidth/2, 60, img.width / 2, img.height / 2);
    }
    pop()
}