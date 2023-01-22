const balls = function (p) {
  let canvas, clientHeight, clientWidth;
  let numBalls;
  let spring = 0.05;
  let gravity = 0.00;
  let friction = -0.9;
  let initV = 1;
  let balls = [];

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  }

  p.setup = function () {
    canvas = p.createCanvas(p.windowWidth, p.windowHeight);
    canvas.position(0, 0);
    canvas.style('display', 'fixed');
    canvas.style('top', '0');
    canvas.style('left', '0');
    canvas.style('z-index', '-1');

    numBalls = p.int(p.width / 40);
    // console.log(width, numBalls);

    for (let i = 0; i < numBalls; i++) {
      balls[i] = new Ball(
        p.random(p.width),
        p.random(p.height),
        p.random(30, 70),
        i,
        balls,
        initV * p.random(-1, 1),
        initV * p.random(-1, 1),
        p.random(150, 255),
        0,
        p.random(150, 255),
        p.random(40, 80)
      );
    }
    p.noStroke();
    p.fill(255, 104);
  }

  p.draw = function () {
    p.clear()
    balls.forEach(ball => {
      ball.collide();
      ball.move();
      ball.display();
    });
  }

  class Ball {
    constructor(xin, yin, din, idin, oin, vxin, vyin, r, g, b, a) {
      this.x = xin;
      this.y = yin;
      this.vx = vxin;
      this.vy = vyin;
      this.diameter = din;
      this.id = idin;
      this.others = oin;
      this.r = r
      this.g = g
      this.b = b
      this.a = a
    }

    collide() {
      for (let i = this.id + 1; i < numBalls; i++) {
        let dx = this.others[i].x - this.x;
        let dy = this.others[i].y - this.y;
        let distance = p.sqrt(dx * dx + dy * dy);
        let minDist = this.others[i].diameter / 2 + this.diameter / 2;
        if (distance < minDist) {
          let angle = p.atan2(dy, dx);
          let targetX = this.x + p.cos(angle) * minDist;
          let targetY = this.y + p.sin(angle) * minDist;
          let ax = (targetX - this.others[i].x) * spring;
          let ay = (targetY - this.others[i].y) * spring;
          this.vx -= ax;
          this.vy -= ay;
          this.others[i].vx += ax;
          this.others[i].vy += ay;
        }
      }
    }

    move() {
      this.vy += gravity;
      this.x += this.vx;
      this.y += this.vy;
      if (this.x + this.diameter / 2 > p.width) {
        this.x = p.width - this.diameter / 2;
        this.vx *= friction;
      } else if (this.x - this.diameter / 2 < 0) {
        this.x = this.diameter / 2;
        this.vx *= friction;
      }
      if (this.y + this.diameter / 2 > p.height) {
        this.y = p.height - this.diameter / 2;
        this.vy *= friction;
      } else if (this.y - this.diameter / 2 < 0) {
        this.y = this.diameter / 2;
        this.vy *= friction;
      }
    }

    display() {
      p.fill(this.r, this.g, this.b, this.a);
      p.ellipse(this.x, this.y, this.diameter, this.diameter);
    }
  }
}



export { balls };