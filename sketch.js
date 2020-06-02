
const Engine=Matter.Engine
const World=Matter.World;
const Bodies=Matter.Bodies;

 var engine,world;
var bgMusic;
 var tilesImg,crossImg,GraveImg;
 var backgroundImg,mountainImg;
// var PlayButton,ControlsButton;
var form;
 var player,ground;

 
 function preload(){

    backgroundImg=loadImage("Game Assets/BackgroundTile.png")
    crossImg=loadImage("Game Assets/Cross.png")
    GraveImg=loadImage("Game Assets/tombstone.png")
    mountainImg=loadImage("Game Assets/Mountain.png")
     tiles=loadImage("Game Assets/GroundTileset2.png")
  //   bgMusic=loadSound("Mp3/01_Body of Water.mp3")
 }
 
function setup() {
    createCanvas(displayWidth, displayHeight);

    engine=Engine.create();
    world=engine.world;

    
   player=new BaseClass(400,500,100,200);
    form=new Form();
    ground=new Ground();
   


 
    
   
    
   
}

     
        

    


 
function draw() {
    Engine.update(engine);

    background(backgroundImg);
    
    image(mountainImg,0,displayHeight/2-400,displayWidth,displayHeight-150)
  ground.display()
    image(crossImg,displayWidth-displayWidth+100,displayHeight/2-120,100,200)
    image(GraveImg,displayWidth-displayWidth+175,displayHeight/2-115,400,300)
  
    player.display();
    console.log(player.body.position.x)
    form.display(); 
  //  bgMusic.play(0,2,30,2,5);
    
}
