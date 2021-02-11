class Chain{
    constructor (bodyA,bodyB){
        var options ={
            bodyA:bodyA,
            bodyB:bodyB,
            //elasticity.
            stiffness:0.04,
            length:10
        }
        this.chain=constraint.create(options);
        //add to world
        world.add(world,this.chain)
    }
    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}