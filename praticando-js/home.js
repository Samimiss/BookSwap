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

// simulando adição e subtração de valor 
const valorReal =  document.getElementById("valor_real");
let contador = 0;

document.getElementById("btn_menos").addEventListener('click' , () => {
    if (contador > 0){
    contador -- ;
    valorReal.textContent = contador;
    }
})
document.getElementById("btn_mais").addEventListener('click' , () => {
    contador ++ ;
    valorReal.textContent = contador;
})
//Adicionando livros

const nomeLivro = document.getElementById ("nome_livro");
const listaLivros = document.getElementById ("lista_livros")

document.getElementById("adiciona_livro").addEventListener('click' , () =>{
    const novoLivro = document.createElement("li");
    novoLivro.textContent = nomeLivro.value;
    listaLivros.appendChild(novoLivro);
});