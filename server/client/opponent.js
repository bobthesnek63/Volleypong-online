class Opponent {
  constructor() {
    this.x = 1400;
    this.y = 750;
    this.play = 2;
  }

  show(){
    rect(this.x, this.y, 100, 50);
  }

  //end would be an argument for the AI
  move(){
    if (keyIsDown(RIGHT_ARROW)){
      this.x += 10;
    } else if (keyIsDown(LEFT_ARROW)){
        this.x -= 10;
    }

    if (keyIsDown(UP_ARROW)){
      this.play = 2;
    } else if (keyIsDown(DOWN_ARROW)){
      this.play = 1;
    }

    // if (this.x > end - 50){
    //   this.x -= 7;
    // } else {
    //   this.x += 7;
    // }
  }

  hit(){
    if (this.x <= 800){
      this.x = 800;
    } else if (this.x >= 1401){
      this.x = 1401;
    }
  }

}
