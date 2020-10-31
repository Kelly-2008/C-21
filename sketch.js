var fixedRect, movingRect, rect1, rect2, rect3, rect4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(500,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  rect1 = createSprite(100, 100, 80, 50);
  rect1.shapeColor = "green";
  rect1.debug = true;

  rect2 = createSprite(200, 100, 80, 50);
  rect2.shapeColor = "green";
  rect2.debug = true;

  rect3 = createSprite(300, 100, 80, 50);
  rect3.shapeColor = "green";
  rect3.debug = true;

  rect4 = createSprite(400, 100, 80, 50);
  rect4.shapeColor = "green";
  rect4.debug = true;

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,fixedRect)){

    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else{

    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }

  if(isTouching(movingRect,rect1)){

    movingRect.shapeColor = "pink";
    rect1.shapeColor = "pink";
  }
  else{

    movingRect.shapeColor = "green";
    rect1.shapeColor = "green";
  }

  if(isTouching(movingRect,rect2)){

    movingRect.shapeColor = "blue";
    rect2.shapeColor = "blue";
  }
  else{

    movingRect.shapeColor = "green";
    rect2.shapeColor = "green";
  }

  if(isTouching(movingRect,rect3)){

    movingRect.shapeColor = "white";
    rect3.shapeColor = "white";
  }
  else{

    movingRect.shapeColor = "green";
    rect3.shapeColor = "green";
  }

  if(isTouching(movingRect,rect4)){

    movingRect.shapeColor = "brown";
    rect4.shapeColor = "brown";
  }
  else{

    movingRect.shapeColor = "green";
    rect4.shapeColor = "green";
  }

  drawSprites();
}

function isTouching(object1,object2){

  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {

    return true;  

}
else {

  return false;

}

}