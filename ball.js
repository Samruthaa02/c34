class Ball{
    constructor(){
        var options={
            density:1,
            frictionAir:0.001
     }
     
     this.x=820;
     this.y=550;
     this.radius=150;
     this.body=Bodies.circle(820,550,150/2,options);
     World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;

        ellipseMode(CENTER);
        fill("pink")
        ellipse(pos.x,pos.y,this.radius,this.radius);
        
        
    }
}