class Umbrella
{

    constructor(x, y)
    {

        var option= {

            isStatic: true

        }

        this.body = Bodies.rectangle(x, y, 50, 200, option);
        this.width = 50;
        this.height = 200;
        this.image = loadImage("images/walking_2.png");

        World.add(world, this.body);

    }

    display()
    {

        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width*6, this.height*2);
        pop();

    }

}