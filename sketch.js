var bullet,wall;
var speed, weight;
var wall,thickness;
var bullet,speed,weight;

 function setup() { 
  createCanvas(1600,400);
speed=random(223,321)
weight=random(30,52)
thickness=random(22,83)



bullet=createSprite(50,200,50,50);
bullet.velocityX = speed;

wall=createSprite(1200,200,60,thickness,height/2);
fill(80,80,80);

  

}

function draw() {
  background(255,255,255); 
if(wall.x-bullet.x <(bullet.width)/2)  
 {
car.velocityX=1;
var deformation=0.5 * weight * speed* speed/22509
if(deformation>180)
 { 
wall.shapeColor=red(230,230,0);
 }
if(deformation<100)
{
wall.shapeColor=color(0,255,0);
}
 }



  drawSprites();
}


function hasCollied(bullet,wall) {
bulletRightEdge=bullet.x +bullet.weight;
wallLeftEdge=wall.x;
if (bulletRightEdge>=wallLeftEdge)
{
    return true
}
return false;
}

if (hasCollied(bullet.wall)){
bullet.velocityX=0;
var damage=0.5 *weight*speed* speed/(thickness *thickness *thickness);

if(damage>10){
wall.shapeColor=Green(255,0,0);
}

if(damage<10){
  wall.shapeColor=Red(0,255,0);
  }
}
