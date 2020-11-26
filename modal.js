let modal1El = document.querySelector('#botaoproj');
let modal2El = document.querySelector('#botaocred');
let xEl = document.querySelector('#projeto .x');
let x2El = document.querySelector('#credito .x')
modal1El.addEventListener('click', showmod);
modal2El.addEventListener('click' , showmod2);
xEl.addEventListener('click', closemod);
x2El.addEventListener('click', closemod2);
function showmod(){
    let modaldivEl = document.querySelector('#projeto');
    modaldivEl.classList.toggle('invisivel');    
}
function showmod2(){
    let modaldiv2El = document.querySelector('#credito');
    modaldiv2El.classList.toggle('invisivel');    
}
function closemod(){
    let spanX1El = document.querySelector("#projeto");
    spanX1El.classList.add('invisivel');
}
function closemod2(){
    let spanX2El = document.querySelector("#credito");
    spanX2El.classList.add('invisivel');
}