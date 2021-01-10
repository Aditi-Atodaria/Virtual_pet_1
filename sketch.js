//Create variables here
var Dog,HappyDog,database,foodS,foodStack

function preload()
{
  //load images here
  DogImage = loadImage("images/dogImg.png");
  DogImage2 = loadImage("images/dogImg1.png");
}

function setup() {

database = firebase.database();

foodStock=database.ref('Food');
foodStock.on("value",readStock);

createCanvas(500, 500);


dog = createSprite(250,250);
dog.scale = 0.2;
dog.addImage(DogImage);



}


function draw() {  
  background(46, 139, 87); 

  drawSprites();
  //add styles here
 textSize(30);
 fill("White")
 stroke("White");
 text("Food Remaining:",150,100);

}

function keyPressed(){
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(DogImage2);
  }
} 

function readStock(data){
  food=data.val();
}

function writeStock(x){

 if(x<=0){
   x=0;
 }else{
   x=x-1;
 }
  
  database.ref('/').update({
    Food:x
  })
}



