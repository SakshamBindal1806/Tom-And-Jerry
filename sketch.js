var bg,cat,mouse;
var bgImg,cat1Img,cat2Img,cat3Img,mouse1Img,mouse2Img,mouse3Img;

function preload() {
    //load the Animations here
    bgImg=loadImage("images/garden.png");
    cat1Img=loadAnimation("images/cat1.png");
    cat2Img=loadAnimation("images/cat2.png","images/cat2.png","images/cat2.png","images/cat3.png","images/cat3.png"
    ,"images/cat3.png","images/cat3.png","images/cat3.png","images/cat3.png");
    cat3Img=loadAnimation("images/cat4.png");

   mouse1Img=loadAnimation("images/mouse1.png");
    mouse2Img=loadAnimation("images/mouse2.png","images/mouse2.png","images/mouse2.png","images/mouse3.png",
    "images/mouse3.png","images/mouse3.png","images/mouse3.png","images/mouse3.png","images/mouse3.png");
    mouse3Img=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(windowWidth,windowHeight);
    //create cat and mouse sprites here
    //bg = createSprite(windowWidth/2,windowHeight/2);
    //bg.addAnimation("gvg",bgImg);

    cat = createSprite(windowWidth-150,windowHeight-100);
    cat.addAnimation("cat",cat1Img);
    cat.scale = 0.11;

    mouse = createSprite(150,windowHeight-100);
    mouse.addAnimation("mouse",mouse1Img);
    mouse.scale = 0.1;
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if cat and mouse collide
    if(cat.x - mouse.x < 80)
    { 
        cat.velocityX=0;
        cat.addAnimation("catLastImage", cat3Img);
        cat.x =300;
        cat.y = windowHeight-150;
        cat.scale=0.17;
        cat.changeAnimation("catLastImage");
        mouse.addAnimation("mouseLastImage", mouse3Img);
        mouse.y = windowHeight-150;
        mouse.scale=0.16;
        mouse.x = 200;
        mouse.changeAnimation("mouseLastImage");
    }  


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      cat.velocityX = -3;
      cat.addAnimation("catRunning",cat2Img);
      cat.changeAnimation("catRunning");

      mouse.addAnimation("mouseDancing",mouse2Img);
      mouse.changeAnimation("mouseDancing");
  }

}
