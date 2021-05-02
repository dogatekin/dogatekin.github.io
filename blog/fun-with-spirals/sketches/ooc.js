let ooc = new p5(function (p) {

  let parentDiv, radius, theta, rotation, a, gap

  p.setup = function () {
    parentDiv = p.canvas.parentElement
    p.createCanvas(p.min(parentDiv.offsetWidth, 640), 360)
    p.angleMode(p.DEGREES)

    theta = 0
    a = 0.02
    radius = a*theta
    rotation = 5
    numPoints = 100

    p.controls = p.createDiv()
    p.controls.class('controls')
    p.controls.style('width', `${p.width}px`)

    p.playpause = p.createButton('<i class="fas fa-play" aria-hidden="true"></i>');
    p.playpause.class('btn btn-link control')
    p.playpause.parent(p.controls)
    p.playpause.mousePressed(p.playPause)

    p.reset = p.createButton('<i class="fas fa-redo"></i>');
    p.reset.class('btn btn-link control')
    p.reset.parent(p.controls)
    p.reset.mousePressed(p.restart)

    p.noLoop()
  }

  p.windowResized = function() {
    p.resizeCanvas(p.min(parentDiv.offsetWidth, 640), 360);
  }

  p.playPause = function () {
    if (!p.isLooping()) {
      p.loop()
      p.playpause.html('<i class="fas fa-pause" aria-hidden="true"></i>')
    } else {
      p.noLoop()
      p.playpause.html('<i class="fas fa-play" aria-hidden="true"></i>')
    }
  }

  p.restart = function () {
    theta = 0
    p.redraw()
  }

  p.draw = function () {
    p.background(180)

    // Coordinates
    p.stroke(150)
    p.line(0, p.height / 2, p.width, p.height / 2)
    p.line(p.width / 2, 0, p.width / 2, p.height)

    p.text(`θ = ${theta}°`, 18, 20)

    // The spiral
    p.stroke(0)
    p.translate(p.width / 2, p.height / 2)
    let px = 0, py = 0, x = 0, y = 0, angle = 0
    for (let i = 0; i <= numPoints; i++) {
      x = a * angle * p.cos(-angle)
      y = a * angle * p.sin(-angle)
      p.line(px, py, x, y)
      px = x
      py = y
      angle += theta / numPoints
    }

    // The line and point
    p.rotate(-theta)
    p.stroke(100)
    p.line(0, 0, radius, 0)
    p.fill(0)
    p.ellipse(radius, 0, 5)

    gap += 0.1
    theta += rotation
    radius = a * theta
  }
}, "ooc")