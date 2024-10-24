var valorEmDolarTexto = prompt("Qual o valor em Dolar que você quer converter?")

var valorEmDolarNumero = parseFloat(valorEmDolarTexto)

var valorEmReal = valorEmDolarNumero * 5.50
var valorEmRealDecimal = valorEmReal.toFixed(2)

alert(valorEmRealDecimal)

//Revisão
// variáveis(var) - inteiros(int), flutuantes(float), strings("")
//alert(), parseInt(), parseFloat(), prompt()
//operações - adição(+), multiplicação(*), subtração(-), divisão(/)