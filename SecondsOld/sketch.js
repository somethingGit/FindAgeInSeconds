// Age Old
// Jason Tse
// 2023/06/09

//Finds age in seconds
let getTime = (time1, time2) => Date.parse(time2) - Date.parse(time1) / 1000;

//Delta Time
//let getTime = (time1, time2) => (Date.parse(time2) - Date.parse(time1)) / 86400000;

//Text that you will see if NaN error is found. 
const nothingText = "Please provide a date with formating MM DD, YYYY, HH:MM:SS ex. January 1, 2000, 12:00:00";

//Global Variables so all functions have access to this. 
let inputBox;
let ageTime;

//Sets up input box and canvas. 
function setup() {
  createCanvas(windowWidth, windowHeight);
  inputBox = createInput();
  inputBox.position(width / 2 - inputBox.width / 2, height / 2 + height / 4 - height / 8);
}

//Displays the squares, and text.
function draw() {
  background(256);
  frameRate(2);
  ageTime = getTime(Date(), inputBox.value());
  if(isNaN(ageTime)) {
    textSize(width / 50);
    text(nothingText, windowWidth / 2 - textWidth(nothingText) / 2, windowHeight / 2 + textDescent());
  }
  else {
    textSize(100 - width / 100);
    text(ageTime, windowWidth / 2 - textWidth(ageTime) / 2, windowHeight / 2 + textDescent());
  }
}

//Resized canvas if window resized. 
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  inputBox.position(width / 2 - inputBox.width / 2, height / 2 + height / 4 - height / 8);
}
