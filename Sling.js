class Sling{
    constructor(bodyA,pointB){
        var options={
            stiffness:1,
            length:220,
            angularStiffness:1,
            bodyA: bodyA,
            pointB:pointB
        }
        this.sling = Constraint.create(options);
        this.pointB = pointB;
        this.pointX = bodyA.x;
        this.pointY = bodyA.y;
        World.add(world,this.sling);
    }

    display(){
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        push();
        strokeWeight(3.5);
        stroke("#fff");
        line(pointB.x,pointB.y,pointA.x,pointA.y);
        pop();
        }
    }
};