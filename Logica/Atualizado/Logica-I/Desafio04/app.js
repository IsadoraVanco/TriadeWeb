// 1
console.log("Seja bem vind@!");

// 2
let nome = "Jurema";
console.log(`Olá, ${nome}!`);
// 3
alert(`Olá, ${nome}!`);

// 4
let linguagem = "";
linguagem = prompt("Qual linguagem de programação você mais gosta?");
console.log(linguagem);

// 5
let valor1 = 14;
let valor2 = 10;
let resultado = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}`);

// 6
resultado = valor1 - valor2;
console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultado}`);

// 7
let idade = 0;
idade = prompt("Qual a sua idade?");
if(idade >= 18){
    console.log("Maior de idade");
}else{
    console.log("Menor de idade");
}

// 8
let numero = 0;
numero = prompt("Digite um valor:");
if(numero >= 0){
    if(numero == 0){
        console.log("Zero");
    }else{
        console.log("Numero positivo");
    }
}else{
    console.log("Numero negativo");
}

// 9
let contador = 1;
while(contador <= 10){
    console.log(contador);
    contador++;
}

// 10
let nota = 8;
if(nota >= 7){
    console.log("Aprovado");
}else{
    console.log("Reprovado");
}

// 11
numero = Math.random();
console.log(numero);

// 12
numero = Math.random() * 10 + 1;
console.log(parseInt(numero));

// 13
numero = Math.random() * 1000 + 1;
console.log(parseInt(numero));