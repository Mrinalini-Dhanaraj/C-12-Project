var path, pathImg
var runner, runnerImg1
var invisibleBoundary1, invisibleBoundary2

function preload(){
    //pre-load images
    pathImg = loadImage("path.png");
    runnerImg1 = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
    //create sprites here
    path = createSprite(200,400,400,400)
    path.addImage(pathImg);
    path.velocityY = -6;
    path.scale = 1.2
    path.y = path.height/2

    runner = createSprite(200,300,10,10);
    runner.addAnimation("runner",runnerImg1);
    runner.scale=0.09

    invisibleBoundary1 = createSprite(370,300,10,800);
    invisibleBoundary1.visible=false;
    invisibleBoundary2 = createSprite(30,300,10,800);
    invisibleBoundary2.visible=false;
}

function draw() {
  background(0);

    runner.x=World.mouseX

    console.log(path.y)
    if (path.y<0){
      path.y = path.height/2
    }
    runner.collide(invisibleBoundary1);
    runner.collide(invisibleBoundary2);
    drawSprites();
}
