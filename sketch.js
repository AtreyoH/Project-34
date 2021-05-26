const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var hero,monster,rope,ground;
var boxes=[];
var box1,box2,box3,box4,box5,box6;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(1500, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);
  box1= new Box(800,100,70,70);
  box2= new Box(800,50,70,70);
  box3= new Box(800,50,70,70);

  box4= new Box(700,50,70,70);

  box5= new Box(600,25,70,70);
  box6= new Box(600,50,70,70);
  
  for(var i=100;i<height;i=i+100){
    
    for(var j=600;j<1000;j=j+100){
      boxes.push(new Box(j,i,70,70))
    }
      
  }

  
}

function draw() {          
  background(bg);
  Engine.update(engine);
 // text(mouseX+" , "+mouseY,mouseX,mouseY);
  ground.display();
  hero.display();
  monster.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  for(var k=0;k<boxes.length;k++){
    boxes[k].display()
  }

}
function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY})
}
