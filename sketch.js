var _length = 400;
var _height = 400;

const FPS = 60;

const STEPPER1_SPEED = 2500;
const STEPPER2_SPEED = 750;

const STEPPER1_MICROSTEP = 4;
const STEPPER2_MICROSTEP = 16;

const STEEP_COUNT = 200;
const PIXEL_STEEP = 36 / (STEEP_COUNT * STEPPER1_MICROSTEP);

const STEPPER2_TRANS = 5;

const STEPPER1_MAX = (_length - 100) / PIXEL_STEEP
const STEPPER2_MAX = ((STEEP_COUNT * STEPPER2_MICROSTEP) * STEPPER2_TRANS) * 45 / 360 //deg

var STEPPER1 = 0;
var STEPPER2 = 0;

function setup() {
  createCanvas(_length, _height);
}

function draw() {
  background(220);
  drawBase();
  
  setAxis1Translation(STEPPER1);
  drawAxis1();
  
  setAxis2Rotation(STEPPER2)
  drawAxis2();
  
  runSteepersToTarget(STEPPER1_MAX, STEPPER2_MAX)
}

function runSteepersToTarget(step1, step2){
  if(STEPPER1 < step1) STEPPER1 += STEPPER1_SPEED / FPS;
  if(STEPPER2 < step2) STEPPER2 += STEPPER2_SPEED / FPS;
}

function drawBase(){
  line(0, _height/2, _length, _height/2);
}

function drawAxis1(steps){
  rect(0, -5, 20, 10)
}

function drawAxis2(){
  circle(0, 0, 10);
  line(0, 0, 0, -50)
}

function setAxis1Translation(steps){
  var p = PIXEL_STEEP * steps
  translate(p, _height/2 - 5);
}

function setAxis2Rotation(steps){
  s = steps / (((STEEP_COUNT * STEPPER2_MICROSTEP) * STEPPER2_TRANS) / 360);
  translate(10,-5);
  angleMode(DEGREES);
  rotate(s);
}