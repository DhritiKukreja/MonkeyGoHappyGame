
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var bannana,bannanaGroup,obstacles,obstaclesGroup;
var survivalTime=0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}



function setup() {
 monkey= createSprite(80,315,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1
  
  ground = createSprite(400,350,900,10);
  ground.velocityX= -4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  bannanaGroup= new Group();
  obstaclesGroup= new Group();
}


function draw() {
background("pink");
  
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
  if(keyDown("space")){
    monkey.velocityY= -12
  }
  monkey.velocityY = monkey.velocityY+0.8;
  
  monkey.collide(ground);
  
  stroke("Black");
  text("Survival Time: "+survivalTime,150,50);
  textSize(40);
  survivalTime=Math.ceil(frameCount/frameRate());
  fill("Black")
        
  
  
  food();
  obstaclesFunction();
  
  drawSprites();
}

function food(){
  if(frameCount%80===0){
    var rand = Math.round(random(120,200));
bannana= createSprite(390,rand,10,10);
bannana.addImage(bananaImage)
    bannana.velocityX= -4;
    bannana.lifeime= 100;
    bannana.scale= 0.1
    
    bannanaGroup.add(bannana);
  
  }
}

function obstaclesFunction(){
   if(frameCount % 300 === 0) {
     
    //var rand = Math.round(random(120,400));
    obstacles = createSprite(390,330,10,40);
     obstacles.addImage(obstacleImage);
     obstacles.lifetime= 100;
     obstacles.velocityX= -4;
     obstacles.scale= 0.1;
     obstaclesGroup.add(obstacles);

}

}





