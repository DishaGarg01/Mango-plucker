class Launcher
{
    constructor(bodyA,pointB)
    {
var option={
    bodyA:bodyA , 
    pointB:pointB,
    stiffness:0.05,
    length:1
}
this.bodyA=bodyA;
this.pointB=pointB;
this.chain=Constraint.create(option)

World.add(world,this.chain)
    }

attach(bodyA)
{
this.chain.bodyA=bodyA
}



    fly()
    {
this.chain.bodyA=null

    }

display()
{
    if(this.chain.bodyA){

var pointA=this.bodyA.position
var pointB=this.pointB

line(pointA.x,pointA.y,pointB.x,pointB.y)

    }

}

}



