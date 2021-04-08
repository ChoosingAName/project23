var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, packageSprite
var engine, world
var log1, log2, log3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	engine = Engine.create();
	world = engine.world;
	createCanvas(800, 700);
	rectMode(CENTER);
	packageSprite = createSprite(width/2,200,30,30)
	packageSprite.addImage("package", packageIMG)
	packageSprite.scale = 0.2

	log1 = new Box(width/2,640,100,20)
	log2 = new Box(350,600,20,100)
	log3 = new Box(450,600,20,100)
	


	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	packageBody = Bodies.circle(width/2 , 200 , 20 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	
    helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


}


function draw(){
  rectMode(CENTER);
  background("black");
  Engine.update(engine)
  log1.display()
  log2.display()
  log3.display()
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  groundSprite.x= ground.position.x 
  groundSprite.y= ground.position.y 
  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
    Body.setStatic(packageBody,false)
  }
}



