const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var ground;
var engine,world;
var ball,rope;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b13,b14,b15,b16,b17,b18,b19;

function setup() {
  createCanvas(1600,1000);
 
engine=Engine.create();
 world=engine.world
 var options={
   isStatic:true
 }
 ground=Bodies.rectangle(800,950,1600,30,options)
 World.add(world,ground)

 b1=new Box(1050,100);
 b2=new Box(1050,100);
 b3=new Box(1050,100);
 b4=new Box(1050,100);
 b5=new Box(1050,100);
 b6=new Box(1050,100);
 b7=new Box(1050,100);
 b8=new Box(1050,100);

 b9=new Box(1160,100);
 b10=new Box(1160,100);
 b11=new Box(1160,100);
 b12=new Box(1160,100);
 b13=new Box(1160,100);
 b14=new Box(1160,100);
 
 ball=new Ball();
 rope=new Rope(ball.body,{x:800,y:100}); 
}

function draw() {
  background(225);
  Engine.update(engine) 

  rectMode(CENTER);
  fill("brown")
  rect(ground.position.x,ground.position.y,1600,30);

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();

  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();

  

  rope.display();
  ball.display();
  
  
  
  textSize(20);
  fill(0)
  text(mouseX+","+mouseY,mouseX,mouseY)
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}

