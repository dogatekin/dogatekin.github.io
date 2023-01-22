const cover = (p) => {

  let parentDiv, angle, size, spiralWidth

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
    let oldX = p.width / 2;
    let oldY = p.height / 2;

    for (let i = 0; i < size; i++) {
      let newAngle = angle * i;
      let x = (p.width / 2) + (spiralWidth * newAngle) * Math.sin(newAngle);
      let y = (p.height / 2) + (spiralWidth * newAngle) * Math.cos(newAngle);

      p.line(oldX, oldY, x, y);
      oldX = x;
      oldY = y;
    }
  }
};

export { cover };