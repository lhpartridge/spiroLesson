// 18.1 Add a reset button.  Declare a button variable
var button


// 2.1 Create global variables for the radii and the angles for the two circles
var r1 = 50
var r2 = 50


// 13.1 To add randomness, remove the values from the radii in the global values and add them to the setup function.
var r1;
var r2;


// 2.2  Create global variables for the angles
var a1 = 0
var a2 = 0


// 14.0 Declare the global variables a1Inc and a2Inc
var a1Inc
var a2Inc


// 8.0 Declare the global variables prevX and prevY
var prevX
var prevY


function setup() {
  // 1.0 Add a variable in the setup function for the createCanvas method.
  //     Set the canvas position and the background color
  let cnv = createCanvas(800, 800)
  cnv.position(400)
  background(30)
 
  // 4.0 Set the angleMode to DEGREES
  angleMode(DEGREES)


  // 18.2 Create the button with the text "reset"
  button = createButton("Reset")


  // 18.4 Call the reset function using the mousePressed method to reset the spirograph
  // The spirograph will now restart every time you click the Reset button
  // End of coding.
  button.mousePressed(reset)


  // 13.2 Assign random values to the radii of the two circles
  // A more complex spirograph will render.
  r1 = random(50, 100)
  r2 = random(50, 100)


  // 15.1 Set up the randomizers for a1Inc and a2Inc
  a1Inc = random(0.1, 5)
  a2Inc = random(0.1, 5)
}


// 18.3 Create a reset function to restart the spirograph
// Call the setup function to restart the graph
// Remove the button which will be recreated in the setup
function reset() {
  setup()
  button.remove()
}


function draw() {
  // 3.0  recenter the drawing on the canvas
  translate(width / 2, height / 2)


  // 6.0 Add the stroke color.
  // You will now see a white dot in the center of the canvas
  // If you do not see a dot, check your file structure
  stroke(255)


  // 16.0 Add a for-loop to speed up the rendering
  // Enclose the code from the variables for the points to incrementing the angles
  // Close the loop before the end of the draw function
  // A complex spirograph will render quickly
  // for (var i = 0; i < 5; i++) {


  // 17.3 Change the conditions in the for-loop
  // for (var i = 0; i < 20; i++) {


  // 17.4 Then increase the maximum value to 100 to get an oscillating effect with changing colors
  for (var i = 0; i < 100; i++) {
   
    // 5.1 Create variables for creating the points to be rendered according to their x- and y-positions on the canvas
    var x1 = r1 * cos(a1)
    var y1 = r1 * sin(a1)
   
    //5.2  Create the point below the x1 and y1 variables
    // 7.2 Remove the point
    // point(x1, y1)
   
    // 11.0 Create the variables for the coordinates of the next point
    // A circle will render on the canvas
    var x2 = x1 + r2 * cos(a2)
    var y2 = y1 + r2 * sin(a2)


    // 17.1 Add colors.  
    // Declare variables for the r, g, b values and set the values as indiciated
    // The map method will reset the value range -1 to 1 to 100 to 200 or, for the b value, in reverse.  
    // You can use other values for the r, g, and b values to get a different color rendering.
    // The spirograph will render in a series of changing colors.
    // You can play around with these values to see the effects
    var r = map(sin(frameCount), -1, 1, 100, 200)
    var g = map(cos(frameCount), -1, 1, 100, 200)
    var b = map(sin(frameCount), -1, 1, 200, 100)


    // 17.2 Add the stroke with the r, g, b values
    // The spirograph will render in a series of changing colors.
    stroke(r, g, b)


   
    // 10.0 Call the line method with the arguments prevX, prevY, x2, y2
    line(prevX, prevY, x2, y2)
   
    // 9.0 Assign the values of the next points to prevX and prevY
    prevX = x2
    prevY = y2
   
    // 7.1 Increment the angle variable for the first circle
    // The circle renders on the canvas infinitely
    a1 += 1
   
    // 12.0 Add an increment for a2 with a value of 5.  
    // A simple spirograph will render.  It will have 5 loops.  
    // You can play with this number to change the loop count of the spirograph.
    a2 += 5
   
    // 15.2 Change the increments for a1 and 12 to a1Inc and a2Inc.
    // A more complex spirograph will render, but very slowly
    a1 += a1Inc
    a2 += a2Inc
  }
}
