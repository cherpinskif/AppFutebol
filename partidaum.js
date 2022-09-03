fetch('https://api.api-futebol.com.br/v1/campeonatos/10', {
  "method": "GET",
  "headers": {
      "Authorization": "Bearer live_35eab49fecc1d23d5c3645c39bad11",
  }
})

.then(resposta => resposta.json())
.then(resposta => rodadaAtual(resposta))
.catch(erro => console.error(erro));

campeonato_id = 10;


function rodadaAtual(rodada){
    console.log(rodada.rodada_atual)
    const ultimaRodada = rodada.rodada_atual;


fetch('https://api.api-futebol.com.br/v1/campeonatos/10/rodadas/'+rodada.rodada_atual, {
"method": "GET",
"headers": {
    "Authorization": "Bearer live_35eab49fecc1d23d5c3645c39bad11",
}
})

.then(resposta => resposta.json())
.then(resposta => jogosRodadaAtual(resposta))
.catch(erro => console.error(erro));

function jogosRodadaAtual(jogos){
    console.log(jogos)
}

}