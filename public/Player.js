class Player {
  constructor(player) {
    this.x = player.x;
    this.y = player.y;
    this.id = player.id;
    this.rgb = player.rgb;
    this.name = "New Player";
  }


  draw() {
    stroke(this.rgb.r, this.rgb.g, this.rgb.b);
    fill(this.rgb.r, this.rgb.g, this.rgb.b);
    circle(this.x, this.y, 50);
  }

  move() {
    this.x += random(1, 10);
    this.y -= random(1, 10);
  }

}