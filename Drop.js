class Drop{
    constructor(x, y, width, height) {
      var options = {
        isStatic:true,
          'friction':0.3,
          'density':1.0
           
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("dustbingreen.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle= this.body.angle;
      
      
      rectMode(CENTER);
      
      rect(pos.x, pos.y, this.width, this.height);

      imageMode(CENTER);
        
      image(this.image,pos.x, pos.y, this.width,this.height);
      
    }
  };