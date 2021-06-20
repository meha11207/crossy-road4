var grid = 50;
var width = 1366;
var carGroup1,logGroup1;
var grassHeight = 100;
var gameState = "play";
var carAnimation1,carAnimation2, logAnimation, playerAnimation,playerImage;
var school;
var city,cityAnimation;
var gamestate="play";

function preload()
{
 carAnimation1 = loadAnimation("images/car1.png");
 carAnimation2= loadAnimation("images/car2.png");
 playerAnimation= loadAnimation("images/Player-03.png");
 logAnimation= loadAnimation("images/log2.png");
 cityAnimation= loadAnimation("images/city1.png","images/city2.png");
}

function setup() {
  createCanvas(1366,2700);
  carGroup1 = new Group();
  logGroup1 = new Group();
  
  city= createSprite(width/2,-1500);
  city.addAnimation("city",cityAnimation);
  for(var i=0;i<6;i++)
  {
    var bottomGrass1= createSprite(683,height-50-(i*400)-grassHeight,width,grassHeight);

    if(i%2===0)
    {
      var road= createSprite(683,height-150-(i*400)-grassHeight,width,300);
      road.shapeColor="black";
    }
   
  }
  bottomGrass1.shapeColor="green";

  for(var i = 0;i<40;i++)
{
  cars= new Car(2);
  carGroup1.add(cars.spt);
}
for(var i = 0;i<40;i++)
{
  log= new Log(-2);
  logGroup1.add(log.spt);
}
player= new Player(width/2,height-25);
}

function draw() {
  background("skyblue");
  translate(0,-player.spt.y+height-150);
  for(i=1;i<logGroup1.length;i++)
  {
    if(logGroup1[i].i<0)
    logGroup1[i].x=width;
  }
  for(i=1;carGroup1.lenght;i++)
  {
    if(carGroup1[i].i<0){
      carGroup1[i].x=width;
    }
   if(carGroup1[i].x=width){
    carGroup1[i].i<0;
   }
  }

 if(carGroup1.isTouching(player.spt))
 {
   player.spt.x = width/2;
   player.spt.y = height-75;
 }
 if(logGroup1.isTouching(player.spt))
 {
   player.spt.x = player.spt.x -3;
 }
 else if((player.spt.y>height-1550 && player.spt.y < height-1300)||
  (player.spt.y < height-500 && player.spt.y > height-850)||
  (player.spt.y>height)||
  (player.spt.x<0)||
  (player.spt.x>width))
  {
    player.spt.x=width/2;
    player.spt.y = height-75;
  }
  if(city.isTouching(player.spt))
  {
    gameState = "WIN";
  }
  if(gameState === "WIN")
  {
    stroke("green");
    fill("green");
    textSize(40);
    text("Congratulations! You Made IT",width/2-250,-1700)
    carGroup1.destroyEach();
    logGroup1.destroyEach();
  }
  keyPressed();

  drawSprites();
}

function keyPressed(){
  if(KeyDown("up"))
  {
    player.move(0,-2);
  } 
   if(KeyDown("down")){
    player.move(0,2);
  } 
   if(KeyDown("left")){
    player.move(-2,0);
  } 
   if(KeyDown("right")) {
    player.move(2,0);
  }
}