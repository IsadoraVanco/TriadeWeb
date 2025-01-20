// 1
let diaSemana = "";
diaSemana = prompt("Que dia da semana é hoje?");
if(diaSemana == "Sábado" || diaSemana == "Domingo"){
    alert("Bom fim de semana!");
}else{
    alert("Boa semana!");
}

// 2
let numero = 0;
numero = prompt("Digite um número:");
if(numero >= 0){
    alert("O número é positivo");
}else{
    alert("O número é negativo");
}

// 3
let saldo = 300;
alert(`Você possui R$${saldo}`); // Template string

//4 
let nome = "";
nome = prompt("Qual o seu nome?");
alert(`Bem-vind@ ${nome}`);

// 5
let pontuacao = 0;
if(pontuacao >= 100){
    alert("Parabéns, você venceu!");
}else{
    alert("Tente novamente para ganhar.");
}