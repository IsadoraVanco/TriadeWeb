const dolar = 1.39;
const libra = 0.72;
var umaLibra = document.getElementById("libra");
var umDolar = document.getElementById("dolar");

umaLibra.innerHTML = (dolar + " Dólar");
umDolar.innerHTML = (libra + " Libra");

function mostraLibra(n){
  var valorConvertido = document.getElementById("input").value;
	valorConvertido = valorConvertido * libra;
  document.getElementById('output').innerHTML = ((valorConvertido.toFixed(2).toString()) + " Libras");
}
 function mostraDolar(n){
	 var valorConvertido = document.getElementById("input").value;
	valorConvertido = valorConvertido * dolar;
  document.getElementById('output').innerHTML = ((valorConvertido.toFixed(2).toString()) + " Dólares");
 }