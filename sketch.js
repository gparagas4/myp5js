const canvasWidth = 600
const canvasheight = 600

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  console.log (canvasWidth/2);
  canvasWidth +=1;//adds one to the variable 
  console.log (canvasWidth);
}

function draw() {
  background( random (255));
  fill("orange");
  stroke ("white");
  beginShape (TESS);
  vertex (20,20);
  vertex (80,20);
  vertex (80,40);
  vertex (40,40);
  vertex (40,60);
  vertex (80,60);
  vertex (80,80);
  vertex (20,80);
  endShape(CLOSE);


}
