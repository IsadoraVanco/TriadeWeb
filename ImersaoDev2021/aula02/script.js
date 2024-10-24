var primeiroValor = parseInt(prompt("Digite o primeiro valor:"));
var segundoValor = parseInt(prompt("Digite o segundo valor:"));
var resultado = 0;
var operacao = prompt("Digite 1 para fazer uma soma, 2 para uma subtração, 3 para multiplicação e 4 para divisão:");

if(operacao == 1) {
  resultado = primeiroValor + segundoValor;
  document.write("<h2>" +primeiroValor + " + " + segundoValor + " = " + resultado + "</h2>");
}else if(operacao == 2) {
  resultado = primeiroValor - segundoValor;
  document.write("<h2>" +primeiroValor + " - " + segundoValor + " = " + resultado + "</h2>");
}else if(operacao == 3) {
  resultado = primeiroValor * segundoValor;
  document.write("<h2>" +primeiroValor + " x " + segundoValor + " = " + resultado + "</h2>");
} else if(operacao == 4) {
  resultado = primeiroValor / segundoValor;
  document.write("<h2>" +primeiroValor + " / " + segundoValor + " = " + resultado + "</h2>");
}else {
  document.write("<h2>Opção inválida</h2>");
}