var generateLines = generateLines || null;
var generatedLineData = null;

var N = 1500;

function setup(){
  if(isFunction(generateLines)){
    createCanvas(800,
                 800);
    generatedLineData = generateLines(N);
    if(!isValidData(generatedLineData)){
      console.log("generateLines の返り値が間違っています");
      generatedLineData = null;
    }
  }else{
    console.log("generateLines が定義されていません");
  }
}

function isValidPointData(point){
  return point && 
    point.length >= 2 &&
    point.every(Number.isFinite);
}

function isValidLineData(line){
  return line &&
    line.length >= 2 &&
    line.every(isValidPointData);
}

function isValidData(lines){
  return lines && 
    isFunction(lines.every) &&
    lines.every(isValidLineData);
}

function generateLuminance(){
  return Math.floor(256 * Math.random());
}

function isFunction(f){
  return f && typeof f == "function";
}

function generateColor(){
  return color(generateLuminance(),
               generateLuminance(),
               generateLuminance(),
               generateLuminance());
}

function drawLines(data){
  stroke(generateColor());
  strokeWeight(1);
  line(data[0][0], data[0][1],
       data[1][0], data[1][1]);
}

function draw(){
  if(isValidData(generatedLineData)){
    noStroke();
    fill("white");
    rect(0, 0, 800, 800);
    generatedLineData.forEach(drawLines);
    generatedLineData = null;
    console.log("描画完了");
  }
}

function updateData(){
  generatedLineData = generateLines(N);
}
