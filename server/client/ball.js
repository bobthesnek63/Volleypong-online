class Ball {
  constructor() {
    this.x = 350;
    this.y = 100;
    this.radius = 50;
    this.touched = false;
    this.playerB = false;
    this.verteX = Math.floor(Math.random() * 110) + 690;
    this.end = Math.floor(Math.random() * 600) + 900;
    this.Pscore = 0;
    this.Oscore = 0;
    this.rally = 0;
    this.speed = 10;
    this.fallSpeed = 3;
    this.falling = true;
  }

  show(){
    ellipse(this.x, this.y, this.radius, this.radius);
  }

  fall(){
    this.y += this.fallSpeed;
  }

  hit(x, y, x2, y2, num1, num2){

    // num1:
    // 1 = player short
    // 2 = player Down

    // num2:
    // 1 = opponent UP
    // 2 = opponent Down

    if (x <= this.x && this.x <= x + 110 && this.y + 25 >= y){
      this.touched = true;
      this.playerB = true;

      if (num1 == 1){
        this.end = Math.floor(Math.random() * 300) + 900;
      } else if (num1 == 2){
        this.end = Math.floor(Math.random() * 300) + 1200;
      }

      this.verteX = abs(this.x + this.end)/2;
      this.a = (this.y - 200)/((this.end - this.verteX)*(this.end - this.verteX))
      this.rally++;
    }

    if (x2 <= this.x && this.x <= x2 + 110 && this.y + 25 >= y2) {
      this.playerB = false;

      if (num2 == 1){
        this.end = Math.floor(Math.random() * 300) + 300;
      } else if (num2 == 2){
        this.end = Math.floor(Math.random() * 300);
      }

      this.verteX = abs(this.x + this.end)/2;
      this.a = (this.y - 200)/((this.end - this.verteX)*(this.end - this.verteX))
      this.rally++;
    }
  }

  check(){
    if (this.y >= 800){
      this.y = 800;
    }
    if (this.x >= 1500){
      this.x = 1493;
    }
    if (this.x <= 0){
      this.x = 7;
    }

    if (this.y >= 800 && this.x <= 700){
      this.Oscore++;
      this.rally = 0;
      this.speed = 10;
      this.reset(1);
    } else if (this.y >= 800 && this.x >= 800){
      this.Pscore++;
      this.rally = 0;
      this.speed = 10;
      this.reset(1);
    }
  }


  bounce(){
    if (this.playerB) {
      // if (this.x == this.verteX){
      //   this.x += 1;
      // }
      // if (this.y == 200){
      //   this.y -= 0.001;
      // }
      this.x += this.speed;
      this.y = this.a * ((this.x - this.verteX)*(this.x - this.verteX)) + 200;
    } else {
      // if (this.x == this.verteX){
      //   this.x -= 1;
      // }
      // if (this.y == 200){
      //   this.y -= 0.001;
      // }
      this.x -= this.speed;
      this.y = this.a * ((this.x - this.verteX)*(this.x - this.verteX)) + 200;
    }
  }

  // rallyCheck(){
  //   if (this.rally > 10 && this.rally < 20){
  //     this.speed = 15;
  //   } else if (this.rally >= 20){
  //     this.speed = 20;
  //   }
  // }

  pause(){
    if (this.falling === true){
      this.fallSpeed = 3;
    } else {
      this.fallSpeed = 0;
    }
  }

  reset(n){
    if (n == 1){
      this.x = 350;
      this.y = 100;
      this.touched = false;
    } else {
      this.x = 1050;
      this.y = 100;
      this.touched = false;
    }
  }
}
