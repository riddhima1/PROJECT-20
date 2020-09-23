var car,wall;
var weight,speed;

function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  speed = random(55,90);
  weight = random(400,1500);
  
  wall = createSprite(1500,200,30,height/2)

  car = createSprite(50,200,20,20);
  car.shapeColor = ("red");
  car.velocity.x = 3;
 
}


function draw() {
  background(255,255,255);  
  if(wall.x-car.x < (car.width+wall.width)/2){
car.velocityX = 0;
var deformation = 0.5 *weight * speed*speed/22509;
if (deformation > 180)
{
car.shapeColor = (255,0,0);
}
if(deformation<180 && deformation>100)
{
  car.shapeColor = color (230,230,0)
}
if(deformation<100)
{
car.shapeColor = color(0,255,0);


}
  }
  drawSprites();
} 