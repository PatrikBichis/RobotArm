var _length = 860;
var _height = 440;

const FPS = 60;

const STEPPER1_SPEED = 2500;
const STEPPER2_SPEED = 750;

const STEPPER1_MICROSTEP = 4;
const STEPPER2_MICROSTEP = 16;

const STEEP_COUNT = 200;
const PIXEL_STEEP = 36 / (STEEP_COUNT * STEPPER1_MICROSTEP);

const STEPPER2_TRANS = 5;

const STEPPER1_MAX = (400 - 40) / PIXEL_STEEP
const STEPPER2_MAX = ((STEEP_COUNT * STEPPER2_MICROSTEP) * STEPPER2_TRANS) * 45 / 360 //deg

var STEPPER1 = 0;
var STEPPER2 = 0;

let slider_axis_1;
let slider_axis_2;
let slider_axis_3;

function setup() {
  createCanvas(_length, _height);

  slider_axis_1 = createSlider(0, 270, 0);
  slider_axis_1.position(460, 40);
  slider_axis_1.style('width', '380px');

  slider_axis_2 = createSlider(-145, 145, 0);
  slider_axis_2.position(460, 80);
  slider_axis_2.style('width', '380px');

  slider_axis_3 = createSlider(-45, 60, 0);
  slider_axis_3.position(460, 120);
  slider_axis_3.style('width', '380px');
}

function draw() {

  var AXIS_1 = slider_axis_1.value();
  var AXIS_2 = slider_axis_2.value();
  var AXIS_3 = slider_axis_3.value();

  angleMode(DEGREES);

  background(220);
  drawViewPorts();
  drawBase();
  
  translate(AXIS_1 + 50,0);

  rect(0, -5, 20, 10)
  line(10, -5 , 10 ,-20)
  translate(10, -20);

  line(0, 0, -10, 0);
  circle(-10, 0, 2);

  translate(-10, 0);
  rotate(AXIS_2);
  circle(0, -40, 2);
  line(0, 0, 0, -40);

  rotate(-AXIS_2);
  translate(10, 0);
  rotate(AXIS_2);
  circle(0, 0, 15);
  circle(0, 0, 2);

  circle(0, -40, 2);
  line(0, 0, 0, -40);

  translate(0, -40);
  rotate(-AXIS_2);
  //Triangle
  circle(0, -10, 2);
  line(0, 0, -10, 0);
  line(0, 0, 0, -10);
  line(-10, 0, 0, -10);

  rotate(AXIS_3);
  //circle(40, -10, 2);
  circle(40, 0, 2);
  line(-10, 0, 40, 0);
  //line(0, -10, 40, -10);
  //line(0 + 40, 0, 40, -10)
  //line(0 + 40, -5, 40 + 10, -5)

  rotate(-AXIS_3);
  translate(0, -10);
  rotate(AXIS_3);
  circle(40, 0, 2);
  line(0, 0, 40, 0);

  translate(40,0);
  rotate(-AXIS_3);
  line(0, 0, 0, 10);
  line(0, 5, 10, 5);
  


  /* setAxis1Translation(STEPPER1);
  drawAxis1();
  
  setAxis2Rotation(STEPPER2)
  drawAxis2();

  setAxis3Rotation(0)
  drawAxis3(); */
  
  /* runSteepersToTarget(STEPPER1_MAX, STEPPER2_MAX) */
}

function runSteepersToTarget(step1, step2){
  if(STEPPER1 < step1) STEPPER1 += STEPPER1_SPEED / FPS;
  if(STEPPER2 < step2) STEPPER2 += STEPPER2_SPEED / FPS;
}

function drawViewPorts(){
  rect(20,20, 400, 400);
  rect(440,20, 400, 400);
}

function drawBase(){
  translate(0,300);
  line(40, 0, 400,0);
}

function drawAxis1(steps){
  rect(0, -5, 20, 10)
  line(10, -5 , 10 ,-20)
  translate(0,-20);
}

function drawAxis2(){
  line(-20, 0, 0, 0);
  circle(-20, 0, 5);
  line(0, 0, 0, -50)
  circle(0, 0, 10);
}

function drawAxis3(){
  line(-20, 0, 0, 0);
  circle(-20, 0, 5);
  line(0, 0, 50, 0)
  circle(0, 0, 10);
  
}

function setAxis1Translation(steps){
  var p = PIXEL_STEEP * steps
  translate(p, 0);
}

function setAxis2Rotation(steps){
  s = steps / (((STEEP_COUNT * STEPPER2_MICROSTEP) * STEPPER2_TRANS) / 360);
  translate(10,-5);
  angleMode(DEGREES);
  rotate(s);
}

function setAxis3Rotation(steps){
  s = 0;
  translate(0,-50);
  angleMode(DEGREES);
  rotate(s);
}