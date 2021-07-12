var ball={
x:50,
y:50,
r:50,
vx:0,
vy:0,
color:["blue","red","green"]
};





function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle(ball.x,ball.y,ball.r)
  fill(ball.color[0])
  ball.vx=5
  ball.x=ball.x+ball.vx
  
}
