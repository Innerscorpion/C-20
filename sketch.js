var mr
var fr
function setup() {
  createCanvas(800,400);
  fr=createSprite(400, 200, 50, 50);
  mr=createSprite(300,200,50,50);
}

function draw() {
  background("blue");
  mr.x=mouseX;
  mr.y=mouseY; 
  if(fr.x-mr.x<fr.width/2+mr.width/2 && 
    mr.x-fr.x<fr.width/2+mr.width/2 &&
    fr.y-mr.y<fr.height/2+mr.height/2 && 
    mr.y-fr.y<fr.height/2+mr.height/2){
     fr.shapeColor="red";
     mr.shapeColor="red";
  } 
  else{
    mr.shapeColor="yellow"
    fr.shapeColor="yellow"
  }

  drawSprites();
}