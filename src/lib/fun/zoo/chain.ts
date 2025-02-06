import type p5 from "p5";

const chain = function (p: p5) {
    let canvas: p5.Renderer
    let chain1: Chain;
    let chain2: Chain;
    let chain3: Chain;
  
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
      p.strokeWeight(10);
      p.noFill();

      // let sizes: number[] = [];
      // let lengths: number[] = [];
      // for (let i = 0; i < 10; i++) {
      //   sizes.push(p.random(20, 40));
      // }
      // for (let i = 1; i < 10; i++) {
      //   lengths.push(p.random(40, 60));
      // }
      // chain = new Chain(sizes, lengths);

      chain1 = new Chain(Array(10).fill(40), Array(9).fill(40), p.createVector(p.width/2, p.height/2));
      chain2 = new Chain(Array(10).fill(40), Array(9).fill(40), p.createVector(50, 50));
      chain3 = new Chain(Array(10).fill(40), Array(9).fill(40), p.createVector(900, 900));
    }
  
    p.draw = function () {
      p.clear();
      chain1.update();
      chain1.display();
      chain2.update();
      chain2.display();
      chain3.update();
      chain3.display();
    }    
    
    class Link {
      pos: p5.Vector;
      r: number;
      target?: Link;
      length?: number;
    
      constructor(x: number, y: number, r: number) {
        this.pos = p.createVector(x, y)
        this.r = r;
      }

      attach(target: Link, length: number) {
        this.target = target;
        this.length = length;
      }
    
      update() {
        if (typeof this.target !== 'undefined' && typeof this.length !== 'undefined') {
          let dir = p.Vector.sub(this.pos, this.target.pos);
          this.pos = p.Vector.add(this.target.pos, dir.setMag(this.length));
        }
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

      constructor(sizes: number[], lengths: number[], pos: p5.Vector) {
        this.seed = p.int(p.random(0, 1000));
        this.heading = p.createVector(1, 0);

        this.links = [];
        let x = pos.x;
        for (let size of sizes) {
          this.links.push(new Link(x, pos.y, size));
          x -= size;
        }
        for (let i = 1; i < this.links.length; i++) {
          this.links[i].attach(this.links[i-1], lengths[i-1]);
        }
      }

      screenwrap(l: number = 0, r: number = p.width, u: number = 0, d: number = p.height, pad: number = 20) {
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
        let speed = p.mouseIsPressed ? 0.1 : 10;
        
        this.heading.rotate(0.1 * p.map(p.noise(0.05 * p.frameCount), 0, 1, -1, 1));
        this.links[0].pos.add(this.heading.setMag(speed));

        this.links.forEach(link => link.update());
      }

      display() {
        for (let link of this.links) {
          link.display();
        }
      }
    }
}

export { chain };