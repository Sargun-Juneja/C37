var gameState = 0;
var database;
var playerCount;
var form,player,game;
var allPlayers;
var cars,car1,car2,car3,car4;
var distance = 0;

function setup(){
    createCanvas(displayWidth,displayHeight);

    database = firebase.database();
    console.log(database);

    game = new Game();
    game.getState();
    game.start()
}

function draw(){
    background("white");

    if(playerCount === 4) {
        game.update(1)
    }

    if(gameState ===1) {
        clear();
        game.play();
    }
}

