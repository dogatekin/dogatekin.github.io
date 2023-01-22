const scaling = function (p) {

  let parentDiv, radius, theta, rotation, a, slider

  p.setup = function () {
    parentDiv = p.canvas.parentElement
    p.createCanvas(p.min(parentDiv.offsetWidth, 640), 360)
    p.angleMode(p.DEGREES)

    theta = 36000

    p.controls = p.createDiv()
    p.controls.class('controls')
    p.controls.style('width', `${p.width}px`)

    slider = p.createSlider(0.01, 0.19, 0.1, 0.01)
    slider.parent(p.controls)
    slider.class('form-control-range')
    slider.input(() => p.redraw())

    p.noLoop()
  }

  p.windowResized = function () {
    if (p.width != p.min(parentDiv.offsetWidth, 640)) {
      p.resizeCanvas(p.min(parentDiv.offsetWidth, 640), 360);
    }
  }

  p.draw = function () {
    p.background(180)
    a = slider.value()

    // Coordinates
    // p.stroke(150)
    // p.line(0, p.height / 2, p.width, p.height / 2)
    // p.line(p.width / 2, 0, p.width / 2, p.height)

    // The spiral
    p.stroke(0)
    p.translate(p.width / 2, p.height / 2)
    let px = 0,
      py = 0,
      x = 0,
      y = 0
    for (let angle = 0; angle <= theta; angle += 1) {
      x = a * angle * p.cos(-angle)
      y = a * angle * p.sin(-angle)
      p.line(px, py, x, y)
      px = x
      py = y
    }
  }
};

export { scaling };