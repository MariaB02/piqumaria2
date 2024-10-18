let cor;
let posicaoHorizontal; // x
let posicaoVertical; // y

function setup() {//configurações
  createCanvas(1000, 1000);//tamanho do quadrado
   background(color(100,0,0));//cor do quadrado
  cor = color(random(0,255), random(0,255), random(0,255));//gerar cor aleatória
  posicaoHorizontal = 200;
  posicaoVertical = 200;
}


function draw() {//desenhar
  
  fill(cor);//cor do círculo
  circle(posicaoHorizontal,posicaoVertical,50);
 
  
  
  if (mouseX < posicaoHorizontal){
    posicaoHorizontal =  posicaoHorizontal - 1;//pro lado -1
  }
  
  if (mouseX > posicaoHorizontal){
    posicaoHorizontal =  posicaoHorizontal + 1;//pro lado +1
  }
  
  if (mouseY < posicaoVertical){//para cima-1
    posicaoVertical--;
  }
    
  if (mouseY > posicaoVertical){//para cima +1
    posicaoVertical++;
  }
  
  if (mouseIsPressed){//quando precionar o mouse
    cor = color(random(0,255), random(0,255), random(0,255), random(0,100));//mudar a cor do círculo quando pressionado
  }
    
}

