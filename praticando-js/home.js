const nomeEntrada = document.getElementById("nome-entrada");
const nomeSaida = document.getElementById("nome-saida");
const btnTroca = document.getElementById("btn-troca");

btnTroca.addEventListener('click', () => {
    nomeSaida.textContent = nomeEntrada.value
});

btnTroca.addEventListener("mouseenter" , () => {
    nomeSaida.style.color = " #ff9cf2" ;
});

btnTroca.addEventListener("mouseout" , () => {
    nomeSaida.style.color = " #000000" ;
});

// Trocando cor da caixa 

const btnMiau = document.getElementById("btn_miau")
const btnAuau = document.getElementById("btn_auau")
const btnOinc = document.getElementById("btn_oinc")
const caixa = document.getElementById("caixa")

btnMiau.addEventListener('click', function(){
    caixa.style.backgroundColor = "pink"
});

btnAuau.addEventListener('click', function(){
    caixa.style.backgroundColor = "purple"
});

btnOinc.addEventListener('click', function(){
    caixa.style.backgroundColor = "blue"
});