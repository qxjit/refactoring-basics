var canvas = document.getElementById('canvas')
var context = canvas.getContext('2d');
var s = 0;
var y = -100;
var boxColor = 'red';
var scoreColor = 'black';

function animate (dt) {
  var v = 100;

  y = y + (v*dt/1000)

  if (y > 400) {
    y = -100;
  }

  context.clearRect(0,0,canvas.width, canvas.height);

  context.beginPath();
  context.rect(0, y, 400, 100);
  context.fillStyle = boxColor;
  context.fill();

  context.fillStyle = scoreColor;
  context.fillText("Score: " + s, 340, 20);
}

function clicked (evt) {
  var p = getMousePos(canvas, evt);

  if (p.y >= y &&
      p.y <= (y + 100) &&
      p.y >= 0 &&
      p.y <= 400) {
    s += 1;
  }
}

canvas.addEventListener('click', clicked);
animationLoop(animate);

