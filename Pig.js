class Pig extends Baseclass{
    constructor(x,y){
        super(x,y,50,50);
        this.image=loadImage("sprites/enemy.png");
        this.visibility = 255;
        }
    display(){
        if(this.body.speed<3){
           // console.log(this.body.speed);
            super.display();   
        }
        else{
         //   console.log(this.body.speed);
            World.remove(world,this.body); 
            push ();
            this.visibility=this.visibility-5;
            tint(255,this.visibility);
            image(this.image,this.body.position.x,this.body.position.y,50,50);
            pop ();  
        }
       
        
    }
   };