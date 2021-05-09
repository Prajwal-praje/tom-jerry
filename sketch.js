var tomImg1,tomIng2,tomImg3,tomImg4
var jerryImg1,jerryImg2,jerryImg3,jerryImg4
var bg
function preload() {
    //load the images here
tomImg1=loadAnimation("images/cat1.png")
tomImg2=loadAnimation("images/cat2.png","images/cat3.png")
tomImg4=loadAnimation("images/cat4.png")
jerryImg1=loadAnimation("images/mouse1.png")
jerryImg2=loadAnimation("images/mouse2.png","images/mouse3.png")
jerryImg4=loadAnimation("images/mouse4.png")
bg= loadImage("images/garden.png")


}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
tom=createSprite(800,600,20,20)
jerry=createSprite(200,600,50,30)
tom.addAnimation("sleeping",tomImg1)
jerry.addAnimation("standing",jerryImg1)
tom.scale=0.2
jerry.scale=0.2

}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
if (tom.x-jerry.x<(tom.width-jerry.width)/2)
{
tom.velocityX=0
tom.addAnimation("lastImg",tomImg4)
jerry.addAnimation("lastImg",jerryImg4)
tom.changeAnimation("lastImg")
jerry.changeAnimation("lastImg")
tom.x=400
tom.scale=0.2
jerry.scale=0.2
}

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if (keyCode===LEFT_ARROW){
tom.velocityX=-5

jerry.addAnimation("lastImg",jerryImg2)
jerry.changeAnimation("lastImg")
jerry.frameDelay=15
tom.addAnimation("lastImg",tomImg2)
tom.changeAnimation("lastImg")

}




}
