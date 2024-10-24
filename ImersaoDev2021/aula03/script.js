var numeroSecreto = parseInt(Math.random() * 10);
var tentativas = 3;

while (tentativas > 0) {
  var chute = parseInt(prompt("Digite um número entre 0 e 10: Você tem " + tentativas + " tentativas."));
  if(numeroSecreto == chute) {
    alert("Acertou!");
    break;
  } else if (chute < numeroSecreto) {
    alert("Baixo! O número secreto é maior que " + chute)
  } else if (chute > numeroSecreto) {
    alert("Alto! O número secreto é menor que " + chute)
  }
  tentativas -= 1;
}

if(chute != numeroSecreto) {
  alert("Perdeu! O número secreto era " + numeroSecreto)
}