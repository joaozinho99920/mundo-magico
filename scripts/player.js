// ===== MUNDO MÁGICO - PLAYER =====

class Player {
  constructor(x, y, color = "#ffcc00") {
    this.x = x;
    this.y = y;
    this.size = 30;
    this.color = color;
    this.speed = 5;

    // teclas pressionadas
    this.keys = {};
    window.addEventListener("keydown", e => this.keys[e.key] = true);
    window.addEventListener("keyup", e => this.keys[e.key] = false);
  }

  move() {
    if (this.keys["ArrowUp"] || this.keys["w"]) this.y -= this.speed;
    if (this.keys["ArrowDown"] || this.keys["s"]) this.y += this.speed;
    if (this.keys["ArrowLeft"] || this.keys["a"]) this.x -= this.speed;
    if (this.keys["ArrowRight"] || this.keys["d"]) this.x += this.speed;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}
