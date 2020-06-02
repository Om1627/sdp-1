class Ground {
    constructor() {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(-50,displayHeight/2+70,displayWidth+100,displayHeight,options);
      this.width = width;
      this.height = height;
      this.image=loadImage("Game Assets/GroundTileset4.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      image(this.image,-50,displayHeight/2+70,displayWidth+100,displayHeight)
    }
  };












  