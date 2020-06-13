var socket;

function setup() {
  createCanvas(1500, 800);
  player = new Player;
  opponent = new Opponent;
  ball = new Ball;
  socket = io.connect('https://volleypong-online.herokuapp.com/');
  // socket = io.connect('http://localhost:8080');
}

//
// function send(data) {
//   opponent.x = data.x,
//   console.log('Coord: ' + data.x);
// }


function draw() {
  background(0);
  rect(700, 500, 100, 300);
  player.show();
  // player.move();
  // player.hit();
  opponent.show();
  // ball.end would be an argument for ball.move()
  opponent.move();
  opponent.hit();
  ball.show();
  // ball.hit(player.x, player.y, opponent.x, opponent.y, player.play, opponent.play);
  // if (!ball.touched){
  //   ball.fall();
  // } else {
  //   ball.bounce();
  // }
  // ball.check();
  // ball.pause();
  // ball.rallyCheck();

  textSize(32);
  fill(255);
  text("Score: " + ball.Pscore, 50, 50);

  textSize(32);
  fill(255);
  text("Score: " + ball.Oscore, 1350, 50);

  var data = {
    x: opponent.x,
    play: opponent.play,
  }

  socket.emit('coord3', data);

  socket.on('coord', function(info){
    player.x = info.x;
    ball.x = info.bx;
    ball.y = info.by;
    ball.Pscore = info.ps;
    ball.Oscore = info.os;
  });
}

function keyPressed(){
  if (keyCode === 80 && ball.falling == true){
    ball.falling = false
  } else {
    ball.falling = true;
  }
}
