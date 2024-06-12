// HTML Canvas

// Canvas Setup
var cnv = document.getElementById("mycanvas");
var ctx = cnv.getContext("2d");
cnv.width = 400;
cnv.height = 500;

let cloud = document.getElementById("cloud");

// Animation Variables
let cloud1X = 100;
let cloud2X = 150;
let cloud3X = 200;

let cloud1y = 100;
let cloud2y = 120;
let cloud3y = 150;

let sunY = 100;

requestAnimationFrame(draw);

function draw() {
  // Sky
  ctx.fillStyle = "lightblue";
  ctx.fillRect(0, 0, 400, 500);

  // Clouds
  ctx.drawImage(cloud, cloud1X, cloud1y, 85, 60);
  ctx.drawImage(cloud, cloud2X, cloud2y, 100, 70);
  ctx.drawImage(cloud, cloud3X, cloud3y, 85, 75);
  
  // Sun
  ctx.fillStyle = "yellow";
  ctx.beginPath();
  ctx.arc(sun1, 50, 20, 0, 2 * Math.PI);
  ctx.fill();
  
  // Water

  ctx.fillStyle = "blue";
  ctx.fillRect(0, 300, 400, 200);

  // Pier Landing
  ctx.fillStyle = "maroon";
  ctx.fillRect(0, 250, 250, 25);

  // Pier Posts
  ctx.fillStyle = "maroon";
  for (let i = 0; i < 4; i++) {
    ctx.fillRect(10 + 50 * i, 200, 15, 300);
  }


  // Fishhead 2
  ctx.fillStyle = "green";
  ctx.beginPath();
  ctx.arc(300, 400, 10, 0, 2 * Math.PI);
  ctx.fill();

  // Fishtail 2
  ctx.fillStyle = "green";
  ctx.beginPath();
  ctx.moveTo(300, 400);
  ctx.lineTo(320, 390);
  ctx.lineTo(320, 410);
  ctx.lineTo(300, 400);
  ctx.fill();

  // Stickman Butt
  ctx.lineWidth = 3;
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.moveTo(240, 240); // butt
  ctx.lineTo(270, 255); // knee
  ctx.stroke();

  // Stickman Leg
  ctx.lineWidth = 3;
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.moveTo(270, 255); // knee
  ctx.lineTo(280, 280); // foot
  ctx.stroke();

  // Stickman Torso
  ctx.lineWidth = 3;
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.moveTo(240, 240); // butt
  ctx.lineTo(250, 180); // neck
  ctx.stroke();

  // Arm
  ctx.lineWidth = 3;
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.moveTo(245, 200); // armpit
  ctx.lineTo(275, 220); // hand
  ctx.stroke();

  // Head
  ctx.lineWidth = 3;
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.arc(260, 162, 20, 0, 2 * Math.PI);
  ctx.stroke();

  // Fishing rod
  ctx.lineWidth = 5;
  ctx.strokeStyle = "gray";
  ctx.beginPath();
  ctx.moveTo(265, 230); // rod bottom
  ctx.lineTo(365, 130); // rod top
  ctx.stroke();

  // Fishing line
  ctx.lineWidth = 2;
  ctx.strokeStyle = "gray";
  ctx.beginPath();
  ctx.moveTo(365, 130);
  ctx.lineTo(365, 350);
  ctx.stroke();

  // Title
  ctx.fillStyle = "rgb(139,204,88)";
  ctx.font = "20px Arial";
  ctx.fillText("JavaScript Canvas", 20, 20);

  // Animation
  cloud1X = cloud1X + 1;
  cloud2X = cloud2X + 0.5;
  cloud3X += 1.25;

  // cloud reappers on the left side
  if (cloud1X >= 400) {
    cloud1X = -85;
    cloud1y = Math.random() * 250;
  }
  // sunset sets but stop at the water
  sunY += 0.5;
  if (sunY >= 250) {
    sunY = 250;
  }
  requestAnimationFrame(draw);

  drawFish(x,y) {
    function drawFish(x, y) {
      // Fishhead 1
      ctx.fillStyle = "green";
      ctx.beginPath();
      ctx.arc(x, y, 10, 0, 2 * Math.PI);
      ctx.fill();
    
      // Fishtail 1
      ctx.fillStyle = "green";
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + 20, y - 10);
      ctx.lineTo(x + 20, y + 10);
      ctx.lineTo(x, y);
      ctx.fill();
    }
}
