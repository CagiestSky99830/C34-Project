const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tower1
var bgImg
var car,carImg;
var invisibleGround;
var score;
function preload(){
  carImg = loadImage("lambo.png");
  bgImg = loadImage("road.jpeg");
}

function setup() {
  createCanvas(2240,480);
  engine = Engine.create();
  world = engine.world;
  car = new Rocket(25,375,182,50,90);
  // Create a ground
  var ground = Bodies.rectangle(width/2, height, width, 1, { isStatic: true });

  // Add the ground to the world
  World.add(world, ground);
  var ground_options = {
    isStatic: true
  };
  ground = Bodies.rectangle(0, 417, 6000, 20, ground_options);
  var rightWall = Bodies.rectangle(width, height/2, 10, height, {isStatic: true});
  rightWall = Bodies.rectangle(2220,480,20,2000, ground_options)
  World.add(world, [ground,rightWall]);

  
}

function draw() {
  background(bgImg);
  Engine.update(engine);
  car.show();
  keyPressed();
  //keyNotPressed();
  score = Math.round(car.body.position.x-2000)/-100;
  text("Score: " + score, 2100, 30);
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    console.log("right arrow pressed");
    xforce();
  }
  else if (keyCode === LEFT_ARROW) {
    console.log("left arrow pressed");
    noforce();
  }
}

function xforce() {
  Matter.Body.applyForce(car.body, car.body.position, {x: 0.05, y: 0});
}
function noforce() {
  Matter.Body.applyForce(car.body, car.body.position, {x: 0, y: 0});
}