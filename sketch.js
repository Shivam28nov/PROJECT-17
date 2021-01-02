// to make variable sprite objects

var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var survivalTime=0;
var ground;


function preload(){
  
  // to preload images
  
  monkey_running =             
  loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  
  // creating Canvas
  createCanvas(600, 500);

  
  // creating monkey sprite
  monkey= createSprite(50,400,20,20);
  
  // add image to monkey
  monkey.addAnimation("monkeyRun",monkey_running);
  
  // to small the size of banana
  monkey.scale=0.1;
  
  
  
  // to create ground sprite
  ground= createSprite(0,435,1200,10);
  
  // to give velocity
  ground.velocityX=-6;
  
  // to reset the ground
  ground.x = ground.width /2;
  
  
  // to create food group
  FoodGroup = new Group();
  
  
}


function draw() {
 
  // to clear screen 
  background(220);
  
  
  // to draw sprites 
  drawSprites();
  
  
  //jump when the space key is pressed
  if(keyDown("space")) {
        monkey.velocityY = -14;
  }
  
  // add gravity
  monkey.velocityY = monkey.velocityY+0.8;
  
  
  // to reset the ground
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  
  // to collide monkey with ground
  monkey.collide(ground);
  
  
  // to call the food and obstacles function
  food();
  obstacles();
  
  
  // to give stroke
  stroke("black");
  
  // to big the size of text
  textSize(25);
  
  // to fill colour to text
  fill("black");
  
  // to update score
  survivalTime=Math.ceil(frameCount/getFrameRate());
  
  // displaying score
  text("Survival Time: "+survivalTime,200,70);
  
}

// creating food obstacle
function food(){
  
  // when 80 frame count then only create sprite
  if(frameCount%80===0){
    
  // to create banana sprite
  banana=createSprite(600,Math.round(random(220,400)),30,30);
      
  // to add image to banana
  banana.addImage("banana",bananaImage);
    
  // to add velocity to banana
  banana.velocityX=-4;
    
  //assign scale to banana
  banana.scale=0.1;
    
  //assign lifetime to banana
  banana.lifetime=150;
    
  //add each banana to the group
  FoodGroup.add(banana);
  
  }
}

// creating obstacle function
function obstacles(){
  
  // when 300 frame count then only create sprite
  if(frameCount%300===0){
  
    // to create obstacle sprite
    obstacle = createSprite(590,420,40,40);
    
    // to add image to obstacle
    obstacle.addImage("obstacles",obstacleImage);
    
    // to add velocity to obstacle
    obstacle.velocityX=-5;        
    
    //assign lifetime to obstacles
    obstacle.lifetime=120;
    
    //assign scale to banana
    obstacle.scale=0.1;
    
  }
}
