const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var snowflake=[]; 

function preload(){
  backgroundImg = loadImage("snow2.jpg");
}

function setup() {
  var canvas = createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;

  if(frameCount % 50 === 0){
    for(var i=0; i<200; i++){
      snowflake.push(new createSnow(random(0,800), random(0,800)));  
    }
  }
}

function draw() {
  background(backgroundImg);

  for(var i = 0; i<200; i++){
    snowflake[i].showDrop();
    snowflake[i].updateY()
}
  drawSprites();
}