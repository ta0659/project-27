
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var b1,b2,b3,b4,b5;
var log;
var l1,l2,l3,l4,l5;
var c1,c2,c3,c4,c5;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	b1= new Ball(275,500,100)
	b2= new Ball(375,500,100)
	b3= new Ball(475,500,100)
	b4= new Ball(575,500,100)
	b5= new Ball(1200,500,100)
	l1=new Log(275,100,110,20,0)
	l2=new Log(375,100,110,20,0)
	l3=new Log(475,100,110,20,0)
	l4=new Log(575,100,110,20,0)
	l5=new Log(675,100,110,20,0)
	//log=new Log(475,100,550,20,0)
	c1=new Chain(b1.body,l1.body);
	c2=new Chain(b2.body,l2.body);
	c3=new Chain(b3.body,l3.body);
	c4=new Chain(b4.body,l4.body);
	c5=new Chain(b5.body,l5.body);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(210);
  
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
//log.display();
l1.display();
l2.display();
l3.display();
l4.display();
l5.display();
c1.display();
c2.display();
c3.display();
c4.display();
c5.display();

  drawSprites();
 
}



