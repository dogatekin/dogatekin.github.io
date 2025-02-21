import type p5 from "p5";

const chain = function (p: p5) {
    let canvas: p5.Renderer;
    let chains: Chain[];
  
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
      
      p.stroke(255);
      p.strokeWeight(8);
      p.noFill();

      let sizes = Array(10).fill(40);
      let lengths = Array(9).fill(40);
      // let sizes = Array(10).fill().map(() => p.random(20, 60));
      // let lengths = Array(9).fill().map(() => p.random(20, 30));
      sizes = [68, 75, 81, 84, 83, 77, 64, 51, 38, 32, 14, 4];
      lengths = Array(sizes.length - 1).fill(40);
      
      chains = [
        new Chain(sizes, lengths, p.createVector(p.width/2, p.height/2), p.PI/6),
        // new Chain(Array(10).fill(30), Array(9).fill(30), p.createVector(50, 50)),
        // new Chain(Array(10).fill(50), Array(9).fill(50), p.createVector(900, 900))
      ];
    }
  
    p.draw = function () {
      p.clear();
      chains.forEach(chain => chain.update());
      chains.forEach(chain => chain.display());
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
          
          // let angle = this.dir.angleBetween(this.target.dir);
          // if (angle > this.constraint) {
          //   angle = this.constraint;
          // }
          // else if (angle < -this.constraint) {
          //   angle = -this.constraint;
          // }

          let angle = this.dir.heading();
          let anchor = this.target.dir.heading();
          angle = this.constrain(angle, anchor, this.constraint);

          this.pos = p.Vector.sub(this.target.pos, p.Vector.fromAngle(angle).setMag(this.length))
          // this.pos = p.Vector.add(this.target.pos, p.Vector.setMag(this.dir, this.length));
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
      heading: p5.Vector;

      constructor(sizes: number[], lengths: number[], pos: p5.Vector, constraint: number) {
        this.seed = p.int(p.random(0, 1000));
        this.heading = p.Vector.random2D();

        this.links = [new Link(pos.x, pos.y, sizes[0])];

        for (let i = 1; i < sizes.length; i++) {
          let prev = this.links[i-1];
          let pos = p.Vector.sub(prev.pos, this.heading.setMag(lengths[i-1]))
          this.links.push(new Link(pos.x, pos.y, sizes[i]));
          this.links[i].attach(prev, lengths[i-1], constraint);
        }
      }

      screenwrap(l: number = 0, r: number = p.width, u: number = 0, d: number = p.height, pad: number = 50) {
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
        let speed = 10;
        
        if (p.mouseIsPressed) {
          this.heading = p.Vector.sub(p.createVector(p.mouseX, p.mouseY), this.links[0].pos)
        }
        else {
          this.heading.rotate(0.1 * p.map(p.noise(0.05 * p.frameCount), 0, 1, -1, 1));
        }

        this.links[0].dir = this.heading;
        this.links[0].pos.add(p.Vector.setMag(this.heading, speed));
        this.links.forEach(link => link.update());
      }

      display() {
        p.stroke('#a8d1d1');
        p.fill('#a8d1d1');
        p.beginShape();
        
        let head = this.links[0];

        // Top of head
        let dir = this.heading;
        let pos = p.Vector.add(head.pos, p.Vector.setMag(dir, head.r/2));
        p.curveVertex(pos.x, pos.y);
        p.curveVertex(pos.x, pos.y);
        
        // Right of head
        dir = p.Vector.rotate(this.heading, p.PI/4);
        pos = p.Vector.add(head.pos, p.Vector.setMag(dir, head.r/2));
        p.curveVertex(pos.x, pos.y);

        dir = p.Vector.rotate(this.heading, p.PI/2);
        pos = p.Vector.add(head.pos, p.Vector.setMag(dir, head.r/2));
        p.curveVertex(pos.x, pos.y);
          
        // Right side of body
        for (let i = 1; i < this.links.length; i++) {
          let cur = this.links[i];
          let dir = p.Vector.sub(cur.target?.pos, cur.pos).rotate(p.PI/2);
          let pos = p.Vector.add(cur.pos, p.Vector.setMag(dir, cur.r/2));
          p.curveVertex(pos.x, pos.y);
        }
        
        // Tail
        let tail = this.links.at(-1);
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
        for (let i = this.links.length - 1; i > 0; i--) {
          let cur = this.links[i];
          let dir = p.Vector.sub(cur.target?.pos, cur.pos).rotate(-p.PI/2);
          let pos = p.Vector.add(cur.pos, p.Vector.setMag(dir, cur.r/2));
          p.curveVertex(pos.x, pos.y);
        }

        // Left of head
        dir = p.Vector.rotate(this.heading, -p.PI/2);
        pos = p.Vector.add(head.pos, p.Vector.setMag(dir, head.r/2));
        p.curveVertex(pos.x, pos.y);
        
        dir = p.Vector.rotate(this.heading, -p.PI/4);
        pos = p.Vector.add(head.pos, p.Vector.setMag(dir, head.r/2));
        p.curveVertex(pos.x, pos.y);

        // Back to the top of head
        dir = this.heading;
        pos = p.Vector.add(head.pos, p.Vector.setMag(dir, head.r/2));
        p.curveVertex(pos.x, pos.y);
        p.curveVertex(pos.x, pos.y);
        
        p.endShape();

        p.stroke(255);
        p.noFill();
        this.links.forEach(link => link.display());
      }
    }
}

export { chain };