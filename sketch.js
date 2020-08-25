var fixedRect, movingRect

function setup() {
  createCanvas(800,900);

  fixedRect = createSprite(400,100,50,150);
  fixedRect.shapeColor = "blue";
  fixedRect.velocityX = 0;
  fixedRect.velocityY = 0;
  movingRect = createSprite(400,800,150,50)
  movingRect.shapeColor = "blue";
  movingRect.velocityX = 0;
  movingRect.velocityY = -4;
}

function draw() {
  background(255,255,255);  
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;

bounceOff(fixedRect, movingRect);

  drawSprites();
}