import type p5 from "p5";

const chain = function (p: p5) {
    let canvas: p5.Renderer
    let links: Link[];
    let chain: Chain;
  
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

      let sizes: number[] = [];
      let lengths: number[] = [];

      for (let i = 0; i < 10; i++) {
        sizes.push(p.random(10, 50));
      }
      for (let i = 1; i < 10; i++) {
        lengths.push(50);
      }

      chain = new Chain(sizes, lengths);
    }
  
    p.draw = function () {
      p.clear();
      chain.update();
      chain.display();
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
        } else {
          let target = p.createVector(p.mouseX, p.mouseY);
          this.pos.add(p.Vector.sub(target, this.pos).limit(10));
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
      sizes: number[];
      lengths: number[];

      constructor(sizes: number[], lengths: number[]) {
        this.sizes = sizes;
        this.lengths = lengths;
        
        this.links = [];
        for (let size of sizes) {
          this.links.push(new Link(p.width/2, p.height/2, size))
        }
        for (let i = 1; i < this.links.length; i++) {
          this.links[i].attach(this.links[i-1], this.lengths[i-1]);
        }
      }

      update() {
        for (let link of this.links) {
          link.update();
        }
      }

      display() {
        for (let link of this.links) {
          link.display();
        }
      }
    }
}

export { chain };