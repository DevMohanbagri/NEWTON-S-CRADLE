const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint;
const Mouse = Matter.Mouse;

var engine, world;
var mConstraint;

function setup(){
    var canvas = createCanvas(windowWidth,windowHeight/1);
    engine = Engine.create();
    world = engine.world;

   
    let canvasmouse = Mouse.create(canvas.elt);
    canvasmouse.pixelRatio = pixelDensity();
    let options={
        mouse: canvasmouse
    };
    mConstraint = MouseConstraint.create(engine,options);
    World.add(world,mConstraint);

    penduluml = new Pendulum(400,500);
    pendulum2 = new Pendulum(520,500);
    pendulum3 = new Pendulum(640,500);
    pendulum4 = new Pendulum(760,500);
    pendulum5 = new Pendulum(880,500);

    slingl = new Sling(penduluml.body,{x:penduluml.x,y:penduluml.y-300});
    sling2 = new Sling(pendulum2.body,{x:pendulum2.x,y:pendulum2.y-300});
    sling3 = new Sling(pendulum3.body,{x:pendulum3.x,y:pendulum3.y-300});
    sling4 = new Sling(pendulum4.body,{x:pendulum4.x,y:pendulum4.y-300});
    sling5 = new Sling(pendulum5.body,{x:pendulum5.x,y:pendulum5.y-300});

}

function draw(){
    background("lightgreen");
    Engine.update(engine);

    penduluml.display();
    pendulum2.display();
    pendulum3.display();
    pendulum4.display();
    pendulum5.display();

    slingl.display();
    sling2.display();
    sling3.display();
    sling4.display();
    sling5.display();

}

function mouseDragged(){
    Matter.Body.setPosition(penduluml.body, {x: mouseX, y: mouseY});
}