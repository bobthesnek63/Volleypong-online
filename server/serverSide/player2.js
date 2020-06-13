class Player {
  constructor() {
    this.x = 0;
    this.y = 750;
    this.play = 2;
  }

  show(){
    rect(this.x, this.y, 100, 50);
  }

  move(){
    if (keyIsDown(68)){
      this.x += 10;
    } else if (keyIsDown(65)){
        this.x -= 10;
    }

    if (keyIsDown(87)){
      this.play = 2;
    } else if (keyIsDown(83)){
      this.play = 1;
    }
  }

  hit(){
    if (this.x >= 600){
      this.x = 600;
    } else if (this.x <= 0){
      this.x = 0;
    }
  }
}
