function setup() {
  createCanvas(800,600);
 box1= createSprite(400, 200, 50, 50);
 box1.shapeColor="blue"
  box2=createSprite(300,400,50,50);
  box2.shapeColor="green"
  box1.debug=true
  box2.debug=true
  
}

function draw() {
  background(255,255,0);  
  box2.x=World.mouseX
  box2.y=World.mouseY
  if(box1.x-box2.x<box1.width/2+box2.width/2
    && box2.x-box1.x<box2.width/2+box1.width/2
    && box1.y-box2.y<box1.height/2+box2.height/2
    && box2.y-box1.y<box2.height/2+box1.height/2){
      box1.shapeColor="red"
      box2.shapeColor="orange"
    }
else{
  box1.shapeColor="blue"
  box2.shapeColor="green"
}

  drawSprites();
}