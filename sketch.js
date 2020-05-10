const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1 = [], box2 = [],box3 = [], box4 = [], box5 = [], box6 = [];
var ball;
var ground;
var colour;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;
  ground = new Ground(200, 100, 800, 20);
  console.log(ground.x)

  for (var i = 110, j = 0; i < 200; i=i+20, j++) {
   box1[j] = new ColorBox(i, 200, 20, 20, "pink"); 
   console.log(box1[j].x)
   box1[j].display();
  }
  for (var i = 50, k = 0; i < 270; i=i+20, k++) {
    box2[k] = new ColorBox(i, 220, 20, 20,"green");
    box2[k].display();
  }
  for (var i = 20, l = 0; i < 300; i=i+20, l++) {
  box3[l] = new ColorBox(i, 240, 20, 20, "blue"); 
  box3[l].display();
  }


  for (var i = 540, j = 0; i < 700; i=i+30, j++) {
    box4[j] = new ColorBox(i, 100, 30, 30, "pink"); 
    box4[j].display();
   }
   for (var i = 480, k = 0; i < 770; i=i+30, k++) {
     box5[k] = new ColorBox(i, 130, 30, 30,"green");
     box5[k].display();
   }
   for (var i = 450, l = 0; i < 800; i=i+30, l++) {
   box6[l] = new ColorBox(i, 160, 30, 30, "blue"); 
   box6[l].display();
   }

  ball = new Ball(300, 300, 20, "red");
  console.log(ball.x);


function draw() {
  background("black"); 
  Engine.update(engine); 
  ground.display();
  for (var i = 0; i < box1.length; i++){
    box[i].display();
    console.log(box[i].x)
  }
  ball.display();
  
  drawSprites();
}
}