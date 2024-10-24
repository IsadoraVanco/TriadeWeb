var paulo = {
  nome: "Paulo",
  vitorias: 2,
  empates: 5, 
  derrotas: 1,
  pontos: 0  
}

var rafa = {
  nome: "Rafa", 
  vitorias: 3,
  empates: 5,
  derrotas: 2,
  pontos: 0
}

function calculaPontos(jogador){
  var pontos = (jogador.vitorias * 3) + jogador.empates
  return pontos
}

rafa.pontos = calculaPontos(rafa)
paulo.pontos = calculaPontos(paulo)

var jogadores = [rafa, paulo]

function exibirJogadores(jogadores){
  var html = ""
  for(var i = 0; i < jogadores.length; i++){
    html += "<tr><td>" + jogadores[i].nome + "</td>"
    html += "<td>" + jogadores[i].vitorias + "</td>"
    html += "<td>" + jogadores[i].empates + "</td>"
    html += "<td>" + jogadores[i].derrotas + "</td>"
    html += "<td>" + jogadores[i].pontos + "</td>"
    html += "<td><button onClick='adicionarVitorias(" + i +")'>Vitória</button></td>"
    html += "<td><button onClick='adicionarEmpate(" + i +")'>Empate</button></td>"
    html += "<td><button onClick='adicionarDerrotas(" + i +")'>Derrota</button></td></tr>"
  }
  var tabelaJogadores = document.getElementById("tabelaJogadores")
  tabelaJogadores.innerHTML = html
}

exibirJogadores(jogadores)

function adicionarVitorias(i){
  var jogador = jogadores[i]
  jogador.vitorias++
  jogador.pontos = calculaPontos(jogador)
  exibirJogadores(jogadores)
}

function adicionarEmpate(i){
  var jogador = jogadores[i]
  jogador.empates++
  jogador.pontos = calculaPontos(jogador)
  exibirJogadores(jogadores)
}

function adicionarDerrotas(i){
  var jogador = jogadores[i]
  jogador.derrotas++
  exibirJogadores(jogadores)
}