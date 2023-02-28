class Rocket 
{
  constructor(x, y, w, h) 
  {
    let options = {
      restitution:1.95
      
    };
    
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
    this.rocketImg=loadImage("lambo.png");
  }

  show() {
    var pos = this.body.position;
    push();
    //stroke(255);
    //fill(127);
    image(this.rocketImg,pos.x, pos.y, this.w, this.h);
    pop();
    //bgImg.depth = car.depth;
    //car.depth = car.depth + 1;
  }
  
}
  