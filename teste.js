let enviarEl = document.querySelector('#enviar');
let respostasEl;
let numerosAcertos;
enviarEl.addEventListener('click', function(){
  scrollTo({ top: 0, behavior: `smooth` })
  numerosAcertos = 0;
  for (let i = 1; i <= 6; i++){
    respostasEl = document.querySelector(`[name = "pergunta${i}"]:checked`);
    let respostaMarcadaEL = respostasEl.value
    if(respostaMarcadaEL === 'certo')
    numerosAcertos++;
  }
  window.alert(numerosAcertos);
});
