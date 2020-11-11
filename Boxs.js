class Boxs {
    constructor(x,y,width,height){
        var options = {
            isStatic: True 
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
 
    }

    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("red");
        rect(0,0, this.width, this.height);
        pop();
    }
}