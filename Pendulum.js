class Pendulum{
    constructor(x,y){
        var options={
            frictionAir:0.0,
            restitution:1,
            friction:0,
            slop:1,
            inertia:Infinity

        }
        this.body = Bodies.rectangle(x,y,120,60,options);
        this.x = x;
        this.y = y;
        World.add(world,this.body);

    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y)
        rotate(angle);
        strokeWeight(3);
        stroke("white");
        fill("lightgreen");
        ellipseMode(RADIUS);
        ellipse(0,0,60,60);
        pop();


    }

}