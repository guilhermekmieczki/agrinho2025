let tratorX = 0;
let tratorY;
let tratorVel = 2;

function setup() {
  createCanvas(800, 400);
  tratorY = height / 2 + 40;
}

function draw() {
  background(200, 240, 255); // Céu azul claro

  // Campo verde embaixo
  fill(34, 139, 34);
  rect(0, height / 2, width, height / 2);

  // Plantação completa
  drawPlantacao();

  // Cidades com prédios frontais apenas
  drawCidade(0, true); // cidade esquerda
  drawCidade(width - 100, false); // cidade direita

  // Estrada
  fill(60);
  rect(0, height / 2 + 30, width, 40);

  // Trator animado
  drawTrator(tratorX, tratorY);
  tratorX += tratorVel;
  if (tratorX > width || tratorX < -60) {
    tratorVel *= -1;
  }
}

function drawPlantacao() {
  fill(255, 215, 0); // Milho amarelo
  for (let x = 0; x < width; x += 20) {
    for (let y = height / 2 + 70; y < height - 10; y += 25) {
      ellipse(x, y, 8, 20);
    }
  }
}

function drawCidade(x, esquerda) {
  fill(100);
  for (let i = 0; i < 5; i++) {
    let offset = esquerda ? i * 20 : -i * 20;
    rect(x + offset, height / 2 - 60 - i * 10, 15, 60 + i * 10);
  }
}

function drawTrator(x, y) {
  // Corpo do trator
  fill(255, 0, 0);
  rect(x, y - 20, 40, 20);
  rect(x + 10, y - 35, 20, 15);

  // Rodas
  fill(0);
  ellipse(x + 10, y, 15, 15);
  ellipse(x + 30, y, 20, 20);
}
