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
  player.move();
  player.hit();
  opponent.show();
  // opponent.move(ball.end);
  opponent.hit();
  ball.show();
  ball.hit(player.x, player.y, opponent.x, opponent.y, player.play, opponent.play);
  if (!ball.touched){
    ball.fall();
  } else {
    ball.bounce();
  }
  ball.check();
  ball.pause();
  // ball.rallyCheck();

  textSize(32);
  fill(255);
  text("Score: " + ball.Pscore, 50, 50);

  textSize(32);
  fill(255);
  text("Score: " + ball.Oscore, 1350, 50);

  var data = {
    x: player.x,
    bx: ball.x,
    by: ball.y,
    ps: ball.Pscore,
    os: ball.Oscore,
  }

  socket.emit('coord', data);

  socket.on('coord3', function(info){
    opponent.x = info.x;
    opponent.play = info.play;
  });
}

function keyPressed(){
  if (keyCode === 80 && ball.falling == true){
    ball.falling = false
  } else {
    ball.falling = true;
  }
}
