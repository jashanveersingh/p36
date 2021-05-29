var dog,dogImage,doghappy;
var foodObj;
var foodS,foodStock;
var fedtime,lastFed,feed,addFood;


function preload(){

dogImage=loadImage("dogImg.png");
doghappy=loadImage("dogImg1.png");

}

function setup() {
  database=firebase.database()
	createCanvas(1000,400);


  foodObj = new Food();
    
  foodStock = database.ref ('food');
  foodStock .on ("value",readStock);

  dog=createSprite(200,200,50,50);
  dog.addImage(dogImage) ;
  dog.scale=0.15;

  feed = createButtom("Feed the dog");
  feed.position (700,95);
  feed.mousePressed(addFood);



}


function draw() {  
backgroud(46,139,87);

  foodObj.display();

  fedTime = database.ref('feedTime');
  fedTime.on("value",function(data){
    lastFed = data.vel();
  })
  fill(255,255,254);
  textSize(15);
    if(lastFed >=12){
    text("Last Feed:12AM ",350,30);
  } 
  else if(lastFed ==0  ){
    text("Last Feed:12AM",350,30)
  }
  else{
    text("last Feed:"+lastFed+"AM",350,30)
  }

 

  drawSprites();
}

  function readStock(date){
  foodS=data.vel();
  foodObj.updateFoodStock(foodS);

  }

 function readStock(){
   dog.addImage(happyDog);

   foodObj.updateFoodStock(foodObj.getFoodStock()-1);
   database.ref('/').update({
   Food:foodObj.getFoodStock(),
   FeedTime: hour()
  
   })
 }
 
   function addFoods(){
     foods++;
     datebase.ref('/').update({
       Food:foods
     })
   }    













