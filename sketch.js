
var engine, world;
var drop1,drop2,drop3;
var paperObject;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//function preload()
//{
	//helicopterIMG=loadImage("helicopter.png")
	//packageIMG=loadImage("package.png")
//}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	engine = Engine.create();
    world = engine.world;
    
       
	/*packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6*/

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	
	drop1=new Drop(580,650,200,20);
	
	drop3=new Drop(680,620,20,50);
	
	drop2=new Drop(580,625,150,150);

	

	
    

	paperObject = new Paper(75,110,100)
	World.add(world, paperObject);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(1000);
  
  
  
  
 
 
 
  Engine.update(engine);
  drawSprites();
  paperObject.display();
  drop2.display();

  
}

function keyPressed() {
 if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:1285,y:-1285});
    
  }
}



