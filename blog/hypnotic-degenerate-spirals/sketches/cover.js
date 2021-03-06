let cover = new p5(function (p) {

  let parentDiv

  p.setup = function () {
    parentDiv = p.canvas.parentElement
    p.createCanvas(p.min(parentDiv.offsetWidth, 640), 360)
    angle = 0
  }

  p.windowResized = function () {
    if (p.width != p.min(parentDiv.offsetWidth, 640)) {
      p.resizeCanvas(p.min(parentDiv.offsetWidth, 640), 360);
    }
  }

  p.draw = function () {
    p.background(180)
    p.noFill()

    size = 100
    spiralWidth = 1
    angle += 0.001

    p.drawSpiral()
  }

  p.drawSpiral = function () {
    oldX = p.width / 2;
    oldY = p.height / 2;

    for (let i = 0; i < size; i++) {
      newAngle = angle * i;
      x = (p.width / 2) + (spiralWidth * newAngle) * Math.sin(newAngle);
      y = (p.height / 2) + (spiralWidth * newAngle) * Math.cos(newAngle);

      p.line(oldX, oldY, x, y);
      oldX = x;
      oldY = y;
    }
  }
}, "cover")