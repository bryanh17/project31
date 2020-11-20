const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ground1;

function setup() {
  createCanvas(480,800);

  ground1 = new Ground(width/2,790,480,10);


}

function draw() {
  background(0);  

  ground1.display();
}
