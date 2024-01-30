function setup() {
  createCanvas(320, 240);
}

function draw() {
  background(200);
  
  // check to condition of the mouse
  if(mouseIsPressed){ // true or false?
    background(0, 200, 998)
    size= 50;
  }
  else { 
    // otherwise do this:
    background(0, 255, 0)
    size= 150;
  }
  ellipse(width/2, height/2, size, size);
}
