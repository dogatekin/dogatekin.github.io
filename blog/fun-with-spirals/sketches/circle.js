let dots = new p5(function(p) {

  let parentDiv, radius, theta, rotation

  p.setup = function() {
    parentDiv = p.canvas.parentElement
    p.createCanvas(p.min(parentDiv.offsetWidth, 640), 360)
    p.angleMode(p.DEGREES)
    p.textAlign(p.CENTER)
    
    radius = 100
    theta = 0
    rotation = 1

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

  p.playPause = function() {
    if (!p.isLooping()) {
      p.loop()
      p.playpause.html('<i class="fas fa-pause" aria-hidden="true"></i>')
    }
    else {
      p.noLoop()
      p.playpause.html('<i class="fas fa-play" aria-hidden="true"></i>')
    }

  }

  p.restart = function() {
    theta = 0
    p.redraw()
  }
  
  p.draw = function() {
    p.background(180)
    
    // Coordinates
    p.stroke(150)
    p.line(0, p.height/2, p.width, p.height/2)
    p.line(p.width/2, 0, p.width/2, p.height)
    
    // The arc
    p.stroke(0)
    p.noFill()
    p.translate(p.width/2, p.height/2)
    p.arc(0, 0, 2*radius, 2*radius, -theta, 0);

    // The line
    p.stroke(100)
    p.fill(100)
    p.rotate(-theta)
    p.line(0, 0, radius, 0)
    p.text(`r = ${radius}`, radius/2, -5)
    p.text(`θ = ${theta}°`, radius/2, 12)
    
    // The point
    p.stroke(0)
    p.ellipse(radius, 0, 5)

    theta += rotation

    if (theta >= 360) {
      p.noFill()
      p.stroke(0)
      p.ellipse(0, 0, 2*radius)
    }
  }
}, "circle")