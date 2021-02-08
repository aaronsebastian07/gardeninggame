var canvas, backgroundImage;

var gameState = 0;

var distance = 0;
var database;

var form, player, game;

var boyfarmer, girlfarmer, dragonfruit, starfruit, atemoya, akebi, buddhashand;

var boyfarmer_img, girlfarmer_img, dragonfruit_img, starfruit_img, atemoya_img, akebi_img, buddashand_img;

function preload(){
  boyfarmer_img = loadImage("boyfarmer.png");
  girlfarmer_img = loadImage("girlfarmer.png");
  dragonfruit_img = loadImage("dragonfruit.png");
  starfruit_png = loadImage("starfruit.png");
  car4_img = loadImage("../images/car4.png");
  ground = loadImage("../images/ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);

  game = new Game();
  game.getState();
  game.start();
}


function draw(){

  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
