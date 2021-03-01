const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Render=Matter.Render;

var engine,world;
//var ground,ball;
var box1,box2,box3,box4,box5;
var pig1,pig2,pig3;
var log1,log2,log3,log4;
var bird;
var backgroundImg;
var constrainedlog,platform;
var chain;
var initialangle;

function preload(){
  backgroundImg = loadImage("sprites/bg.png");
}

function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
//we can load the image in setup function also instead of preload
 // backgroundImg = loadImage("sprites/bg.png");

  
  
  ground = new Ground(600,height,1200,20);
  platform=new Ground(150,305,300,170);

  box1 = new Box(700,355,70,70);
  box2 = new Box(920,355,70,70);
  pig1 = new Pig(810,350);
  log1 = new Log(810,300,300,PI/2);
 
  box3 = new Box(700,285,70,70);
  box4 = new Box(920,285,70,70);
  pig2 = new Pig(810,280);
  log2= new Log(810,220,300,PI/2);

  box5 = new Box(810,175,70,70);

  log3= new Log(760,120,150,PI/7);
  log4= new Log(870,120,150,-PI/2);

  bird = new Bird(210,40);
 

  constrainedlog= new Log(230,180,80,PI/2); 
 rubber= new SlingShot(bird.body,{x:190,y:50});
/* var render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    width: 1200,
    height: 400,
    wireframes: false
  }
});
Render.run(render);*/
 
}

function draw() {
  background(backgroundImg);  
  Engine.update(engine);
  
  box1.display();
  box2.display();
  ground.display();
  pig1.display();
  log1.display();

  box3.display();
  box4.display();
  pig2.display();
  log2.display();

  box5.display();
  log3.display();
  log4.display();

  bird.display();
  platform.display();
 
  //constrainedlog.display();
  rubber.display();
  
}

function mouseDragged(){
  Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  rubber.fly();
}

function keyPressed(){
  if(keyCode === 32){
  
     rubber.attach(bird.body);
 
      }
}

//below mentioned code is not in the curriculum. it is to rotate the bird in its original position when we attach it on the sling.
/*
function keyPressed(){
  if(keyCode === 32){
    console.log(bird.body.angle);
    console.log("speed",bird.body.speed);
     
  //sets the position of the bird back to sling
    Matter.Body.setPosition(bird.body,{x:200,y:50});
    //attaches bird to constraint
     rubber.attach(bird.body);
     //gets the angle of rotation, so that we rotate it to original position
    initialangle=-(bird.body.angle);
   
    //rotates the bird to its original position
    Matter.Body.rotate(bird.body,initialangle);
      }
}*/