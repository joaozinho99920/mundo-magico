const player = document.getElementById("player");
let posX = window.innerWidth / 2 - 25;
let posY = 0;
let isJumping = false;
const speed = 10;
const jumpHeight = 150;

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") posX -= speed;
  if (e.key === "ArrowRight") posX += speed;
  if (e.key === " " && !isJumping) jump();

  player.style.left = posX + "px";
});

function jump() {
  isJumping = true;
  let up = setInterval(() => {
    if (posY >= jumpHeight) {
      clearInterval(up);
      let down = setInterval(() => {
        if (posY <= 0) {
          clearInterval(down);
          isJumping = false;
        }
        posY -= 10;
        player.style.bottom = posY + "px";
      }, 20);
    }
    posY += 10;
    player.style.bottom = posY + "px";
  }, 20);
}
