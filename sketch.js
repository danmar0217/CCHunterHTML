let para;
let slider
let sliderValue =18

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Help blind or low-vision users understand your sketch
  describe("A 400 by 400 pixel gray canvas.");
  para = createP("This text is on the webpage made with p5")
  para.position(0,20)
  para.style('background-color:black;')

  slider = createSlider(12,24,18)
  slider.position(0,70)
}

function draw() {
  background(220);
  push()
  textSize(sliderValue)
  text(tex)
  pop()
}