// TITLE

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;
//Global Varible
let myArray = [500, 200, 350, 400, 580, 170, 225, 325];

// Main Program Loop
requestAnimationFrame(draw);

function draw() {
  // Logic
  let barwidth = cnv.width / myArray.length;
  // Drawing
  ctx.clearRect(0, 0, cnv.width, cnv.height);

  //draw bars
  ctx.fillStyle = "orange";
  ctx.strokeStyle = "grey";
  for (let i = 0; i < myArray.length; i++) {
    ctx.fillRect(i * barwidth, cnv.height - myArray[i], barwidth, myArray[i]);
    ctx.strokeRect(i * barwidth, cnv.height - myArray[i], barwidth, myArray[i]);
  }
  // Request another Animation Frame
  requestAnimationFrame(draw);
}
