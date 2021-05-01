let points = new p5(function (p) {

  let theta, a, slider

  p.setup = function () {
    const parentDiv = p.canvas.parentElement
    p.createCanvas(p.min(parentDiv.offsetWidth, 640), 360)
    p.angleMode(p.DEGREES)

    theta = 3600
    a = 0.1

    p.controls = p.createDiv()
    p.controls.class('controls')
    p.controls.style('width', `${p.width}px`)

    slider = p.createSlider(1, 100, 1, 1)
    slider.parent(p.controls)
    slider.class('form-control-range')
    slider.input(() => p.redraw())

    p.noLoop()
  }

  p.draw = function () {
    p.background(180)
    let gap = slider.value()

    // Coordinates
    p.stroke(150)
    p.line(0, p.height / 2, p.width, p.height / 2)
    p.line(p.width / 2, 0, p.width / 2, p.height)

    // The spiral
    p.stroke(0)
    p.translate(p.width / 2, p.height / 2)
    let px = 0, py = 0, x = 0, y = 0
    for (let angle = 0; angle <= theta; angle += gap) {
      x = a * angle * p.cos(-angle)
      y = a * angle * p.sin(-angle)
      p.ellipse(x, y, 2)
      p.line(px, py, x, y)
      px = x
      py = y
    }
  }
}, "points")