// ===== MUNDO MÁGICO - PRINCIPAL =====

// Pega o canvas e define o contexto 2D
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Faz o canvas preencher a tela
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Cria o jogador
const player = new Player(canvas.width / 2, canvas.height / 2);

// Atualiza o tamanho se a tela mudar
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// ===== LOOP DO JOGO =====
function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  player.move();
  player.draw(ctx);

  requestAnimationFrame(gameLoop);
}

// Inicia o jogo
gameLoop();
