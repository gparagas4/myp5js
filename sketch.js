let w = 400
let h = 600

function setup() {
  createCanvas(w, h);
}

function draw() {
  background(125);
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
