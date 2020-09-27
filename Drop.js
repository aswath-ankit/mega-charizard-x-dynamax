class Drop
{

    constructor(x, y)
    {

        var option= {

            friction: 0.1

        }

        this.body = Bodies.circle(x, y, 10, option);
        this.radius = 10;

        World.add(world, this.body);

    }

    update()
    {

        if(this.body.position.y > height)
        {

            Matter.Body.setPosition(this.body, {x: random(0, 400), y: random(0, 400)});

        }

    }

    display()
    {

        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        stroke(0);
        fill(2, 3, 46);
        ellipseMode(RADIUS);
        ellipse(0, 0, this.radius,this.radius);
        pop();

    }

}