var seaImg=loadImage("sea.png");
var shipAmime=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
var sea, ship;
function preload(){
  createCanvas(400,400);
  sea=createSprite(1,399,399,399);
  sea.addImage(seaImg);
  sea.velocityX=-5;
  ship=createSprite(60,100,50,50);
  ship.addAnimation(shipAmime);
}

function setup(){
 
  
  if(sea.x<0){
    sea.x=sea.width/2;
  }
  
}

function draw() {
  background("blue");
  drawSprites();
}