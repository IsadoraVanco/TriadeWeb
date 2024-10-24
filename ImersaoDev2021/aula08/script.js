var cartaPaulo = {
  nome: "Seiya de Pegaso",
  imagem: "https://i.pinimg.com/originals/e9/c1/77/e9c1778727e6c604ace92a2ec73ce52b.jpg",
  atributos: {
      ataque: 80,
      defesa: 60,
      magia: 90
  }
}

var cartaRafa = {
  nome: "Bulbasauro",
  imagem: "https://pm1.narvii.com/6329/88c5004e010297796b811afc7e4ead78f6d98e07_hq.jpg",
  atributos: {
      ataque: 70,
      defesa: 65,
      magia: 85
  }
}

var cartaGui = {
  nome: "Lorde Darth Vader",
  imagem: "https://www.nerdsite.com.br/wp-content/uploads/2020/01/darth.jpg",
  atributos: {
      ataque: 88,
      defesa: 62,
      magia: 90
  }
}


var cartaMaquina
var cartaJogador
var cartas = [cartaPaulo, cartaRafa, cartaGui]
// 0          1           2

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 3)
  cartaMaquina = cartas[numeroCartaMaquina]

  var numeroCartaJogador = parseInt(Math.random() * 3)
  while (numeroCartaJogador == numeroCartaMaquina) {
      numeroCartaJogador = parseInt(Math.random() * 3)
  }
  cartaJogador = cartas[numeroCartaJogador]

  document.getElementById('btnSortear').disabled = true
  document.getElementById('btnJogar').disabled = false
  exibeCartaJogador()
}

function exibeCartaJogador() {
var divCartaJogador = document.getElementById("carta-jogador")
var moldura = "<img src='https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png' style=' width: inherit; height: inherit; position: absolute;'>"
divCartaJogador.style.backgroundImage=`url(${cartaJogador.imagem})`
var nome=`<p class="carta-subtitle">${cartaJogador.nome}</p>`
var opcoesTexto = ""

for (var atributo in cartaJogador.atributos) {
      opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
  }

var html = "<div id='opcoes' class='carta-status'>"

divCartaJogador.innerHTML = moldura+nome+html+opcoesTexto+ '</div>'
}

function obtemAtributoSelecionado() {
  var radioAtributo = document.getElementsByName('atributo')
  for (var i = 0; i < radioAtributo.length; i++) {
      if (radioAtributo[i].checked) {
          return radioAtributo[i].value
      }
  }
}

function jogar() {
  var divResultado = document.getElementById("resultado")
  var atributoSelecionado = obtemAtributoSelecionado()

  if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
      var htmlResultado = "<p class='resultado-final'>Venceu</p>"
  } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
      var htmlResultado = "<p class='resultado-final'>Perdeu</p>"
  } else {
      var htmlResultado = "<p class='resultado-final'>Empatou</p>"
  }
divResultado.innerHTML = htmlResultado
exibeCartaMaquina()
}

function exibeCartaMaquina() {
var divCartaMaquina = document.getElementById("carta-maquina")
var moldura = "<img src='https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png' style=' width: inherit; height: inherit; position: absolute;'>"
divCartaMaquina.style.backgroundImage=`url(${cartaMaquina.imagem})`
var nome=`<p class="carta-subtitle">${cartaMaquina.nome}</p>`
var opcoesTexto = ""

for (var atributo in cartaMaquina.atributos) {
      opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "</p>"
  }

var html = "<div id='opcoes' class='carta-status --spacing'>"

divCartaMaquina.innerHTML = moldura+nome+html+opcoesTexto+ '</div>'
}