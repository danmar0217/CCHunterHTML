let para;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Help blind or low-vision users understand your sketch
  describe("A 400 by 400 pixel gray canvas.");
  para = createP("This text is on the webpage made with p5")
  para.position(0,20)
  para.style('background-color:black;')
}

function draw() {
  background(220);
}