var path ,pathImage
var ground1,ground2
function preload(){
  //pre-load images
pathImage=loadImage("path.png")
RunnerImage=loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
 path=createSprite(200,200)
 path.addImage(pathImage)
 Runner=createSprite(200,200)
 Runner.addAnimation("Running",RunnerImage)
 Runner.scale=0.1
 ground1=createSprite(50,200,30,400)
 ground1.visible= false
 ground2=createSprite(350,200,30,400)
 ground2.visible= false
}

function draw() {
  background("black");
  Runner.x = mouseX;
  Runner.collide(ground1)
  Runner.collide(ground2)
drawSprites()
}
