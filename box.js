class Box {
    constructor(x,y){
        var options={
            friction:0.75,
            density:0.5,
            restitution:0.6
        }
      this.box=Bodies.rectangle(x,y,100,100,options);
      this.width=100;
      this.height=100;
      World.add(world,this.box);
    }
    display(){
        var pos=this.box.position;
        var ang=this.box.angle;

        push();
        translate(pos.x,pos.y);
        rotate(ang);
        stroke("green")
        strokeWeight(5);
        rectMode(CENTER);
        fill(225);
        rect(0,0,this.width,this.height);
        pop();
    }
}