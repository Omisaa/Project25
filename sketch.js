
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;
const Body = Matter.Body;

var paper
var dustbin
var ground

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(200,450,40);
	dustbin = new Dustbin(1200,650);
	ground = new Ground(width/2,670,width,20);

    
	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  })
  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");

  
  paper.display();
  dustbin.display();
  ground.display();
  
  drawSprites();
  keyPressed();
 
}


function keyPressed() {
	if (keyCode === UP_ARROW) {
        Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
  
	}

}
