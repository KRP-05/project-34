class monster{
    constructor(x,y,width,height,angle){


this.body  =Bodies.rectangle(x,y,width,height,{isStatic:true})
this.width= width
this.height = height
this.image = loadImage("monster.png")

World.add(world,this.body)
    }

    display(){
        var angle  =this.body.angle
        push();
        translate(this.body.position.x,this.body.position.y)
        rotate(angle)
        imageMode(CENTER)
        fill("pink")
        image(this.image,0,0,this.width*1.5,this.height*1.5)
        
        pop()
    }
}