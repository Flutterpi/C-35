var database,position;
var form,player,game;
var playerCount;
var canvas,backgroundImage;
var gameState = 0;

function setup(){
    canvas = createCanvas(400,400);
    database = firebase.database();
    game = new Game()
    game.getState()
    game.start()
    
}

function draw(){
    background("white");
        
}

