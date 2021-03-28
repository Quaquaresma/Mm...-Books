let enviarEl = document.querySelector('#enviar');
let respostasEl;
let numerosAcertosEl;
let labelRespostaEl;
let quizContainerEl = document.querySelector('.quiz-wrapper');
let divResultadoEl;
let stringResultado;
let tituloResultadoEl;
let paragrafoResultadoEl;
let imgResultadoEl;
let limparAparecer = document.getElementById("limpar");

function criaHTMLResultado() {
  divResultadoEl = document.createElement('div');
  tituloResultadoEl = document.createElement('h1');
  paragrafoResultadoEl = document.createElement('p');
  imgResultadoEl = document.createElement('img');
  imgResultadoEl.src = `imgs/${stringResultado}.png`;
  tituloResultadoEl.innerHTML = `Sua pontuação é ${numerosAcertos}/6`;
  if (stringResultado === 'bom'){
    paragrafoResultadoEl.innerHTML = "Tá sabendo de tudo ou quase, parabéns champs!";
  }
  else {
    if (stringResultado === 'medio'){
      paragrafoResultadoEl.innerHTML = "Ainda precisa afiar esses conhecimentos, lembra que o nome do homem se escreve com todas as letras maiúsculas";
    }
    else{
      paragrafoResultadoEl.innerHTML = "DOOM MANDOU VOCÊ IR ESTUDAR >:((";
    }
  }
  enviarEl.style.display = 'none';
  divResultadoEl.appendChild(tituloResultadoEl);
  divResultadoEl.appendChild(imgResultadoEl);
  divResultadoEl.appendChild(paragrafoResultadoEl);
  divResultadoEl.classList.add(`resultado-${stringResultado}`);
  quizContainerEl.insertBefore(divResultadoEl, quizContainerEl.firstChild);
}

function contaAcertos() {
  scrollTo({ top: 0, behavior: `smooth` });
  limparAparecer.id = "limpadoAparecendo";
  numerosAcertos = 0;
  for (let i = 1; i <= 6; i++){
    respostasEl = document.querySelector(`[name = "pergunta${i}"]:checked`);
    labelRespostaEl = respostasEl.parentElement;
    if(respostasEl.value === 'certo'){
      numerosAcertos++;
      labelRespostaEl.style.border = 'solid 3px green';
      labelRespostaEl.style.borderRadius = '20px';
      labelRespostaEl.style.backgroundColor  = 'rgba(78, 207, 19, 0.5)';
    }
    else{
      labelRespostaEl.style.border = 'solid 2px red';
      labelRespostaEl.style.borderRadius = '20px';
      labelRespostaEl.style.backgroundColor = 'rgba(219, 39, 26, 0.5)';
    }
    if (numerosAcertos > 4){
      stringResultado = 'bom';
    }
    else {
      if (numerosAcertos > 2){
        stringResultado = 'medio';
      }
      else{
        stringResultado = 'ruim';
      }
    }
  }
  criaHTMLResultado();
}


enviarEl.addEventListener('click', contaAcertos);
