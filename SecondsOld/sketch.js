// Age Old
// Jason Tse
// 2023/06/09

let getTime = ageTime => (Date.parse(Date()) - Date.parse(ageTime)) / 1000;
let nothingText = "Please provide a date with formating MM DD, YYYY, HH:MM:SS \n ex. January 1, 2000, 12:00:00";
let inputBox;

function setup() {
  createCanvas(windowWidth, windowHeight);
  inputBox = createInput();
  inputBox.position(width / 2 - inputBox.width / 2, height / 2 + height / 4 - height / 8);
  //timeAge = window.prompt("Please provide a date with formating MM DD, YYYY, HH:MM:SS \n ex. January 1, 2000, 12:00:00")
}

function draw() {
  let timeAge = inputBox.value();
  background(256);
  frameRate(2);
  textSize(100);
  let ageTime = getTime(timeAge);
  if(isNaN(ageTime)) {
    textSize(25);
    text(nothingText, windowWidth / 2 - textWidth(nothingText) / 3, windowHeight / 2 + textDescent());
  }
  else {
    text(ageTime, windowWidth / 2 - textWidth(ageTime) / 2, windowHeight / 2 + textDescent());
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  inputBox.position(width / 2 - inputBox.width / 2, height / 2 + height / 4 - height / 8);
}
