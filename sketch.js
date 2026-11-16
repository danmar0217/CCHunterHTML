let para;
let slider
let sliderValue =24
let button

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Help blind or low-vision users understand your sketch
  describe("A 400 by 400 pixel gray canvas.");
  para = createP("This text is on the webpage made with p5")
  para.position(0,20)
  para.style('background-color:black;')

  slider = createSlider(12,100,24)
  slider.position(0,70)
  slider.changed(sliderChanged)
  button =createButton('New Element')
  button.position(width/2,(height/2)+40)
}

function draw() {
  background(220);
  push()
  textSize(sliderValue)
  text(sliderValue, width/2,height/2)
  pop()
}

function sliderChanged(){
  sliderValue=slider.value()
}