import type p5 from "p5";

const zoo = function (p: p5) {
    let creatures: any[];
  
    p.windowResized = function () {
      p.resizeCanvas(p.windowWidth, p.windowHeight);
    }
  
    p.setup = function () {
      let canvas: p5.Renderer;
      
      canvas = p.createCanvas(p.windowWidth, p.windowHeight);
      canvas.position(0, 0);
      canvas.style('display', 'fixed');
      canvas.style('top', '0');
      canvas.style('left', '0');
      canvas.style('z-index', '-1');
      
      p.stroke(255);
      p.strokeWeight(8);
      p.noFill();

      let sizes = Array(10).fill(40);
      let lengths = Array(9).fill(40);
      let speed = 10;
      // let sizes = Array(10).fill().map(() => p.random(20, 60));
      // let lengths = Array(9).fill().map(() => p.random(20, 30));
      sizes = [68, 75, 81, 84, 83, 77, 64, 51, 38, 32, 14, 4];
      lengths = Array(sizes.length - 1).fill(40);

      sizes = Array(30).fill().map((v, i) => 100 - 2*i);
      lengths = Array(sizes.length - 1).fill().map(() => 20);

      if (p.windowWidth < 720) {
        sizes = sizes.map(s => s / 2);
        lengths = lengths.map(l => l / 2);
        speed /= 2;
      }

      creatures = [
        new Worm(new Chain(sizes, lengths, p.createVector(p.width/2, p.height/2), p.PI/6, speed), p.color('#C9CBA3')),
        // new Worm(new Chain(sizes, lengths, p.createVector(p.width/2, p.height/2), p.PI/6, speed), p.color('#FFE1A8')),
        // new Worm(new Chain(sizes, lengths, p.createVector(p.width/2, p.height/2), p.PI/6, speed), p.color('#BC4749')),
      ];
    }
  
    p.draw = function () {
      p.clear();
      creatures.forEach(chain => chain.update());
      creatures.forEach(chain => chain.display());
    }    
    
    class Link {
      pos: p5.Vector;
      dir: p5.Vector;
      r: number;
      target?: Link;
      length?: number;
      constraint?: number;
    
      constructor(x: number, y: number, r: number) {
        this.pos = p.createVector(x, y)
        this.r = r;
      }

      attach(target: Link, length: number, constraint: number) {
        this.target = target;
        this.length = length;
        this.constraint = constraint;
      }
    
      update() {
        if (typeof this.target !== 'undefined' && typeof this.length !== 'undefined' && typeof this.constraint !== 'undefined') {
          this.dir = p.Vector.sub(this.target.pos, this.pos);
          
          let angle = this.constrain(this.dir.heading(), this.target.dir.heading(), this.constraint);
          
          this.pos = p.Vector.sub(this.target.pos, p.Vector.fromAngle(angle).setMag(this.length))
          // this.pos = p.Vector.add(this.target.pos, p.Vector.setMag(this.dir, -this.length));
        }
      }

      constrain(angle: number, anchor: number, constraint: number) {
        let angleDiff = p.PI - this.simplify(angle + p.PI - anchor);

        if (p.abs(angleDiff) <= constraint) {
          return this.simplify(angle);
        }

        if (angleDiff > 0) {
          return this.simplify(anchor - constraint);
        }

        return this.simplify(anchor + constraint);
      }

      simplify(angle: number) {
        return ((angle % p.TAU) + p.TAU) % p.TAU;
      }
    
      display() {
        if (typeof this.target !== 'undefined' && typeof this.length !== 'undefined') {
          p.line(this.pos.x, this.pos.y, this.target.pos.x, this.target.pos.y)
        } 
        p.circle(this.pos.x, this.pos.y, this.r);
      }
    }

    class Chain {
      links: Link[];
      seed: number;
      dir: p5.Vector;
      speed: number;

      constructor(sizes: number[], lengths: number[], pos: p5.Vector, constraint: number, speed: number) {
        this.seed = p.int(p.random(0, 1000));
        this.speed = speed;
        
        this.dir = p.Vector.random2D();
        
        this.links = [new Link(pos.x, pos.y, sizes[0])];
        for (let i = 1; i < sizes.length; i++) {
          let prev = this.links[i-1];
          let pos = p.Vector.sub(prev.pos, this.dir.setMag(lengths[i-1]))
          this.links.push(new Link(pos.x, pos.y, sizes[i]));
          this.links[i].attach(prev, lengths[i-1], constraint);
        }
      }

      screenwrap(l: number = 0, r: number = p.width, u: number = 0, d: number = p.height, pad: number = 50) {
        if (p.windowWidth < 720) {
          pad /= 2;
        }

        if (this.links.every(link => link.pos.x > r + pad)) {
          let furthest = Math.max(...this.links.map(link => link.pos.x));
          this.links.forEach(link => link.pos.x -= furthest - l + pad/2);
        } 
        else if (this.links.every(link => link.pos.x < l - pad)) {
          let furthest = Math.min(...this.links.map(link => link.pos.x));
          this.links.forEach(link => link.pos.x += r - furthest + pad/2); 
        } 
        else if (this.links.every(link => link.pos.y > d + pad)) {
          let furthest = Math.max(...this.links.map(link => link.pos.y));
          this.links.forEach(link => link.pos.y -= furthest - u + pad/2);
        } 
        else if (this.links.every(link => link.pos.y < u - pad)) {
          let furthest = Math.min(...this.links.map(link => link.pos.y));
          this.links.forEach(link => link.pos.y += d - furthest + pad/2); 
        }
      }

      update() {
        this.screenwrap();

        p.noiseSeed(this.seed);
        
        let speed = this.speed;
        
        if (p.mouseIsPressed) {
          this.dir = p.Vector.sub(p.createVector(p.mouseX, p.mouseY), this.links[0].pos);
          if (this.dir.mag() < 100) {
            speed = p.map(this.dir.mag(), 100, 0, this.speed, 0);
          }
        }
        else {
          this.dir.rotate(this.speed/100 * p.map(p.noise(0.05 * p.frameCount), 0, 1, -1, 1));
        }

        this.links[0].dir = this.dir;
        this.links[0].pos.add(p.Vector.setMag(this.dir, speed));
        this.links.forEach(link => link.update());
      }

      display() {
        this.links.forEach(link => link.display());
      }
    }

    class Worm {
      chain: Chain;
      color: p5.Color;

      constructor(chain: Chain, color: p5.Color) {
        this.chain = chain;
        this.color = color;
      }

      update() {
        this.chain.update();
      }

      display() {
        p.stroke(this.color);
        p.fill(this.color);
        p.beginShape();
        
        let head = this.chain.links[0];
        let dir;
        let pos;

        // Right of head
        dir = p.Vector.rotate(this.chain.dir, p.PI/2);
        pos = p.Vector.add(head.pos, p.Vector.setMag(dir, head.r/2));
        p.curveVertex(pos.x, pos.y);
        p.curveVertex(pos.x, pos.y);
          
        // Right side of body
        for (let i = 1; i < this.chain.links.length; i++) {
          let cur = this.chain.links[i];
          let dir = p.Vector.sub(cur.target?.pos, cur.pos).rotate(p.PI/2);
          let pos = p.Vector.add(cur.pos, p.Vector.setMag(dir, cur.r/2));
          p.curveVertex(pos.x, pos.y);
        }
        
        // Tail
        let tail = this.chain.links.at(-1);
        dir = p.Vector.sub(tail?.target?.pos, tail?.pos).rotate(3*p.PI/4);
        pos = p.Vector.add(tail?.pos, p.Vector.setMag(dir, tail.r / 2))
        p.curveVertex(pos.x, pos.y);
        
        dir = p.Vector.sub(tail?.target?.pos, tail?.pos).rotate(p.PI);
        pos = p.Vector.add(tail?.pos, p.Vector.setMag(dir, tail.r / 2))
        p.curveVertex(pos.x, pos.y);

        dir = p.Vector.sub(tail?.target?.pos, tail?.pos).rotate(-3*p.PI/4);
        pos = p.Vector.add(tail?.pos, p.Vector.setMag(dir, tail.r / 2))
        p.curveVertex(pos.x, pos.y);

        // Left side of body
        for (let i = this.chain.links.length - 1; i > 0; i--) {
          let cur = this.chain.links[i];
          let dir = p.Vector.sub(cur.target?.pos, cur.pos).rotate(-p.PI/2);
          let pos = p.Vector.add(cur.pos, p.Vector.setMag(dir, cur.r/2));
          p.curveVertex(pos.x, pos.y);
        }

        // Left of head
        dir = p.Vector.rotate(this.chain.dir, -p.PI/2);
        pos = p.Vector.add(head.pos, p.Vector.setMag(dir, head.r/2));
        p.curveVertex(pos.x, pos.y);
        
        dir = p.Vector.rotate(this.chain.dir, -p.PI/3);
        pos = p.Vector.add(head.pos, p.Vector.setMag(dir, head.r/2));
        p.curveVertex(pos.x, pos.y);
        
        dir = p.Vector.rotate(this.chain.dir, -p.PI/6);
        pos = p.Vector.add(head.pos, p.Vector.setMag(dir, head.r/2));
        p.curveVertex(pos.x, pos.y);

        // Top of head
        dir = this.chain.dir;
        pos = p.Vector.add(head.pos, p.Vector.setMag(dir, head.r/2));
        p.curveVertex(pos.x, pos.y);
        
        // Right of head
        dir = p.Vector.rotate(this.chain.dir, p.PI/6);
        pos = p.Vector.add(head.pos, p.Vector.setMag(dir, head.r/2));
        p.curveVertex(pos.x, pos.y);
        
        dir = p.Vector.rotate(this.chain.dir, p.PI/3);
        pos = p.Vector.add(head.pos, p.Vector.setMag(dir, head.r/2));
        p.curveVertex(pos.x, pos.y);

        dir = p.Vector.rotate(this.chain.dir, p.PI/2);
        pos = p.Vector.add(head.pos, p.Vector.setMag(dir, head.r/2));
        p.curveVertex(pos.x, pos.y);
        p.curveVertex(pos.x, pos.y);
        
        p.endShape();

        p.stroke(255, 64);
        p.noFill();
        this.chain.display();
      }
    }
}

export { zoo };