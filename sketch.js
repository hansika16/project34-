var d1,happyDog,dog
var database,foodS,foodStock

function preload()
{
  d1=loadImage("dogImg.png") 
  happyDog=loadImage("dogImg1.png")
}

function setup()
{
  createCanvas(500,500);
  background(46,139,87)
  database=firebase.database();
  
  dog=createSprite(250,250,10,10)
  dog.addImage(d1)
  dog.scale=0.2

  foodStock=database.ref('Food').on("value",readStock)
}


function draw() 
{  
  background("black")
  
  if(keyWentDown(UP_ARROW))
  {
    writeStock(foodS)
    dog.addImage(happyDog)
  }
  drawSprites();
  textSize(20)
  text("Note: Press up arrow to feed the dog Milk!",100,100)
  fill("white")

}

function readStock(data)
{
  foodS=data.val()
}

function writeStock(x)
{
  if(x<0)
  {
    x=0
  }
  else
  {
    x=x-1
  }
  database.ref('/').update({
    Food:x 
  })
}



