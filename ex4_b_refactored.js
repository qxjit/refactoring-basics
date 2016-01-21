//******
// Change request:
//   Size & color the two boxes differently
//
// Refactorings applied:
//   Inline variable (boxColor)
//   Add parameter (isBoxedClicked box)
//   Replace variable ref with field ref (isBoxedClicked, y -> box.y)
//   Remove parameter (isBoxedClicked y)
//   Extract function (isWithin)
//
//******

var canvas = document.getElementById('canvas')
var context = canvas.getContext('2d');
var s = 0;
var scoreColor = 'black';
var scoreBGColor = '#CCC';
var box1 = { x: 0, y: -100, w: 400, h: 100, color: 'red' }
var box2 = { x: 0, y: -300, w: 400, h: 100, color: 'red' }

function drawRect (rect) {
  context.beginPath();
  context.rect(rect.x, rect.y, rect.w, rect.h);
  context.fillStyle = rect.color;
  context.fill();
}

function advance (y, v, dt) {
  var newY = y + (v*dt/1000)

  if (newY > 400) {
    newY = -100;
  }

  return newY
}

function animateBox (box, dt) {
  var v = 100;
  box.y = advance (box.y, v, dt)
  drawRect(box);
}

function animate (dt) {
  context.clearRect(0,0,canvas.width, canvas.height);

  animateBox(box1, dt);
  animateBox(box2, dt);

  drawRect({ x: 320, y: 0, w: 80, h: 35, color: scoreBGColor });

  context.fillStyle = scoreColor;
  context.fillText("Score: " + s, 340, 20);
}

function isWithin(c, min, max) {
  return c >= min && c <= max;
}

function isBoxedClicked (box, p) {
  return isWithin(p.y, box.y, box.y + 100) &&
         isWithin(p.y, 0, 400);
}

function clicked (evt) {
  var p = getMousePos(canvas, evt);

  if (isBoxedClicked(box1, p) ||
      isBoxedClicked(box2, p)) {
    s += 1;
  }
}

canvas.addEventListener('click', clicked);
animationLoop(animate);

