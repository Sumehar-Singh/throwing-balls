class Paper {
    constructor(x, y, radius) {
      var options = {
          'isStatic':false,
          'restitution':0.3,
          'friction':0.9,
          'density':1.2
          
      }
      this.paperImg = loadImage("paper.png");
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      //stroke("green");
      //strokeWeight(3);
      fill("yellow");
      
      //ellipse(0, 0, this.radius,this.radius);
      image(this.paperImg, 0, 0, 80, 80);
      if(keyWentDown("up"))
      {
	      pos.x = pos.x + 17;
      	pos.y = pos.y + -15;
      }
      pop();
    }
  };
  