class Chain{
    constructor(bodyA,bodyB){
       // this.offsetX=offsetX
       // this.offsetY=offsetY
        var options={
            bodyA: bodyA,
            bodyB: bodyB,
         //   pointB: {x: this.offsetX, y: this.offsetY}
            stiffness: 0.04,
            length: 500
        }

        this.Chain=Constraint.create(options);
        World.add(world,this.Chain);
    }

    display(){
        var pointA=this.Chain.bodyA.position
        var pointB=this.Chain.bodyB.position
        strokeWeight(3);
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}