function setup() {
  createCanvas(400, 400);
  background("black");
  
}

function draw() {
  
  fill("pink");
  stroke("blue");
  if(mouseIsPressed){
    
    rect(mouseX,mouseY,20,30); //retangulo(pos x, pos y, tam x, tam y)
  }
 
}
