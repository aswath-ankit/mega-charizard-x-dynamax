const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var umbrella;
var thunderStrok, ts1, ts2, ts3, ts4;

var thunderFrame = 0;

var drop = [];
var maxDrops = 100;

function preload(){
    
    ts1 = loadImage("images/1.png");
    ts2 = loadImage("images/2.png");
    ts3 = loadImage("images/3.png");
    ts4 = loadImage("images/4.png");

}

function setup(){
    createCanvas(400,800);
    engine = Engine.create();
    world = engine.world;

    umbrella = new Umbrella(width/2, height/2+220);

    for(var i = 0; i < maxDrops; i++)
    {

        drop.push(new Drop(random(0, 400), random(0, 400)));

    }

}

function draw(){
    background(0);
    Engine.update(engine);

    for(var i = 0; i < maxDrops; i++)
    {

        drop[i].update();
        drop[i].display();

    }

    if(frameCount % 80 === 0)
    {

        thunderStrok = createSprite(width/2, height/2-400, 10, 10);

        thunderFrame = frameCount;

        var rand = Math.round(random(1, 4));
        switch (rand) {
            case 1:
            thunderStrok.addImage(ts1);
            break;
            case 2:
            thunderStrok.addImage(ts2);
            break;
            case 3:
            thunderStrok.addImage(ts3);
            break;
            case 4:
            thunderStrok.addImage(ts4);
            break;
            default:
            break;
        }

    }

    if(thunderFrame + 10 === frameCount && thunderStrok)
    {
        
        thunderStrok.destroy();

    }

    umbrella.display();
    drawSprites();

}   

