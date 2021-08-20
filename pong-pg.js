// declarações da bolinha
let xBall=100;
let yBall=100;
let diameter = 30;
let raio = diameter/2;
// Foi criado o raio para a colisão ser reconhecida antes de chegar ao centro do circulo.
// declarações de velocidade
let xvelo = 5;
let yvelo = 5;
// Declarações da raquete
let widthRaquete = 10;
let heightRaquete = 90;
let xRaquete =5;
let yRaquete = 150;
// declarações da raquete do oponente
let widthRaqueteOpponent = 10;
let heightRaqueteOpponent = 90;
let xRaqueteOpponent =585;
let yRaqueteOpponent = 150;
let velocidadeYOponente;
// Placar de jogo
let mainPoints = 0;
let opponentPoints = 0;

let colidiu = false;
function setup() { 
  createCanvas(600, 400);
  // Create Canvas serve para criar a tela de fundo jogo.O primeiro valor é largura, segundo a altura.
}

function draw() {
  background(0);
//   Na função background determina a cor do fundo.
  showBall();
//   Duvidas: olhar Help ==> References.
  moveBall();
  colisionVerification();
  createRaqueteMain();
  createRaqueteOpponent();
  moveRaqueteMain();
  movimentaRaqueteOpponent();
  colisionRaqueteMain();
  colisionRaqueteMainLibOpponent();
  // colisionRaqueteOpponent();
  incluiPlacar();
  marcarPlacar();

}
// Funções da bolinha
function showBall(){
  circle(xBall, yBall, diameter);
}
function moveBall(){
  xBall += xvelo;
  yBall += yvelo;
  
}
function colisionVerification (){
  if (xBall+raio > width || xBall-raio < 0){
    xvelo *= -1;
  }
  else   if (yBall+raio > height || yBall-raio < 0){
    yvelo *= -1;
  }
  
}
// Funções da raquete
function createRaqueteMain(){
  rect(xRaquete, yRaquete, widthRaquete, heightRaquete);
}
function createRaqueteOpponent(){
  rect(xRaqueteOpponent, yRaqueteOpponent, widthRaqueteOpponent, heightRaqueteOpponent);
}
function moveRaqueteMain(){
    if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  else if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
  
}

function movimentaRaqueteOpponent() {
    velocidadeYOponente = yBall - yRaqueteOpponent - widthRaquete / 2 - 30;
    yRaqueteOpponent += velocidadeYOponente
}

function colisionRaqueteMain(){
  if(xBall-raio < xRaquete+widthRaquete && yBall-raio < yRaquete+heightRaquete && yBall + raio > yRaquete){

     xvelo *= -1;
  }
}
function colisionRaqueteOpponent(){
  if(xBall-raio < xRaqueteOpponent+widthRaqueteOpponent && yBall-raio < yRaqueteOpponent+heightRaqueteOpponent && yBall + raio > yRaquete){

     xvelo *= -1;
  }
}
function colisionRaqueteMainLib(){
  colidiu= collideRectCircle(xRaquete,yRaquete,widthRaquete,heightRaquete,xBall,yBall,raio );
  if(colidiu){
    xvelo *= -1;
  }
}
function colisionRaqueteMainLibOpponent(){
  colidiu= collideRectCircle(xRaqueteOpponent,yRaqueteOpponent,widthRaqueteOpponent,heightRaqueteOpponent,xBall,yBall,raio );
  if(colidiu){
    xvelo *= -1;
  }
}

function incluiPlacar (){
  fill(255);
  text(mainPoints,278,26);
  text(opponentPoints, 326,26);
}

function marcarPlacar(){
  if(xBall > 590){
    mainPoints += 1;
  }
  else if (xBall < 10){
    opponentPoints += 1;
  }
}