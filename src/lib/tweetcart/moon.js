const moon = (p) => {
  let t, night, water, moon, moonx = 30, moony = 22, moonr = 15;

  p.setup = function () {
    let canvas = p.createCanvas(128, 128);

    p.frameRate(30);
    p.pixelDensity(2);

    t = () => p.millis() / 1000;

    night = p.color(20);
    water = p.color(31, 44, 80);
    moon = p.color(253, 241, 233);

    canvas.style('width', '400px');
    canvas.style('height', '400px');
  }

  p.draw = function () {
    p.randomSeed(0);

    if (p.mouseIsPressed && p.mouseX >= 0 && p.mouseX <= p.width && p.mouseY >= 0 && p.mouseY <= p.height) {
      moonx = p.mouseX;
      moony = p.mouseY;
    }

    p.background(night);
    p.noStroke();
    p.fill(moon);

    p.ellipse(moonx, moony, 2 * moonr);

    p.noStroke();
    p.fill(night);
    p.rect(0, 50, p.width, 78);

    for (let y = 0; y <= 78; y++) {
      let z = 78 / (y + 1);

      for (let i = 0; i <= 8 * z; i++) {
        let x = (p.random(160) + t() * 150 / z) % 160 - 16;
        let w = p.cos(2 * p.PI * (p.random() + t())) * 12 / z;

        if (w > 0) {
          let ry = 49 - y / 2;
          let d2 = (moonx - x) ** 2 + (moony - ry) ** 2
          if (d2 < moonr ** 2) {
            p.stroke(moon);
          } else {
            p.stroke(water);
          }

          p.line(x - w, y + 50, x + w, y + 50);
        }
      }
    }
  }
};

export { moon };