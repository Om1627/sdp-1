class Form{
    constructor(){
        this.PlayButton= createButton("Play")
        this.ControlsButton=createButton("View Controls");
    }
    display(){
    
        this.PlayButton.position(400,100);
        this.ControlsButton.position(700,100);
       
        this.PlayButton.size(100,50);
      
        this.ControlsButton.size(100,50);
    }
}