let canvas, clientHeight, clientWidth;
let numBalls;
let spring = 0.05;
let gravity = 0.00;
let friction = -0.9;
let initV = 1;
let balls = [];

function windowResized() {
  // clientHeight = document.getElementById('main').clientHeight;
	// clientWidth = document.getElementById('main').clientWidth;
  // resizeCanvas(clientWidth, clientHeight);
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  // clientHeight = document.getElementById('main').clientHeight;
	// clientWidth = document.getElementById('main').clientWidth;

  // canvas = createCanvas(clientWidth, clientHeight);
	// canvas.parent("main");
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');

  numBalls = int(width / 40);
  console.log(width, numBalls);

  for (let i = 0; i < numBalls; i++) {
    balls[i] = new Ball(
      random(width),
      random(height),
      random(30, 70),
      i,
      balls,
      initV * random(-1, 1),
      initV * random(-1, 1),
      random(150, 255),
      0,
      random(150, 255),
      random(40, 80)
    );
  }
  noStroke();
  fill(255, 104);
}

function draw() {
  if (currentTheme == 'light') {
    background('#f3f3f3');  
  }
  else {
    background('#1f2427');
  }
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
      // console.log(others[i]);
      let dx = this.others[i].x - this.x;
      let dy = this.others[i].y - this.y;
      let distance = sqrt(dx * dx + dy * dy);
      let minDist = this.others[i].diameter / 2 + this.diameter / 2;
      //   console.log(distance);
      //console.log(minDist);
      if (distance < minDist) {
        //console.log("2");
        let angle = atan2(dy, dx);
        let targetX = this.x + cos(angle) * minDist;
        let targetY = this.y + sin(angle) * minDist;
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
    if (this.x + this.diameter / 2 > width) {
      this.x = width - this.diameter / 2;
      this.vx *= friction;
    } else if (this.x - this.diameter / 2 < 0) {
      this.x = this.diameter / 2;
      this.vx *= friction;
    }
    if (this.y + this.diameter / 2 > height) {
      this.y = height - this.diameter / 2;
      this.vy *= friction;
    } else if (this.y - this.diameter / 2 < 0) {
      this.y = this.diameter / 2;
      this.vy *= friction;
    }
  }

  display() {
    fill(this.r, this.g, this.b, this.a);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}
