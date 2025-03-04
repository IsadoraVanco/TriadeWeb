// 1
let titulo = document.querySelector('h1');
titulo.innerHTML = "Hora do Desafio";

// 2 
function mostrarMensagemConsole(){
    console.log("O botão foi clicado");
}

// 3
function mostrarMensagemPopup(){
    alert("Eu amo JS");
}

// 4 
function mostrarMensagemPrompt(){
    let cidade = prompt("Digite o nome de uma cidade do Brasil:");
    alert(`Estive em ${cidade} e lembrei de você`);
}

// 5
function somarNumeros(){
    let valor1 = parseInt(prompt("Digite um valor inteiro:"));
    let valor2 = parseInt(prompt("Outro valor inteiro:"));
    alert(`A soma é ${valor1 + valor2}`);
}