var p5Canvas;
var myName;

function setup() {
  p5Canvas = createCanvas(800, 600);
  p5Canvas.parent("#p5-canvas");
  myName = select("#my-name");
  myName.html("Adrian"); // enter your name here!
}

 /*
  full reference: https://p5js.org/reference/
  line: https://p5js.org/reference/#/p5/line
  rectangle: https://p5js.org/reference/#/p5/rect
  ellipse: https://p5js.org/reference/#/p5/ellipse
  arc: https://p5js.org/reference/#/p5/arc
  background color: https://p5js.org/reference/#/p5/background
  shape color: https://p5js.org/reference/#/p5/fill
  line color, weight, etc: https://p5js.org/reference/#/p5/stroke
 */

// Write all your code inside the draw() function below!
function draw() {
background('black'); // try changing this to a blue background
  fill('blue');    // Always call fill() before the shape you want to fill in.
  rect(60, 70, 680, 440); // Draw a 30x20 pixel rectangle at coordinate (55,55)
    line(390,190, 390, 440);
    triangle(130, 200, 150, 120, 275, 300);
    triangle(530, 200, 550, 120, 675, 300);
    arc(400, 450, 80, 80, 0, PI + QUARTER_PI, OPEN);
    fill("red");
    ellipse(230, 490, 210, 135);
    
    console.log("I am below line function");
    
    drawthreelittlecircles();
    }
  // Example. You can remove when you're ready!