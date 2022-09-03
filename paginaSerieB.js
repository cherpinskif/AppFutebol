    
    const teste = "test_fa754529ed2c0e3d075468837005ee";
    const producao = "live_35eab49fecc1d23d5c3645c39bad11";
    var atual = teste;
    
    fetch("https://api.api-futebol.com.br/v1/campeonatos/10/tabela", {
      "method": "GET",
      "headers": {
          "Authorization": (atual == teste) ? `Bearer ${teste}` : `Bearer ${producao}`,
      }
    })
    
    .then(resposta => resposta.json())
    .then(resposta => tabelaCampeonato(resposta))
    .catch(erro => console.error(erro));
      
      function tabelaCampeonato(times){
    
       
        let classificacao = document.querySelector("#classificacaoCampeonato");
        
        function verClassificacao(){
            classificacao.addEventListener("click", () =>{
            tabela.innerHTML = 
            `
            <div class="row">
            <div class="col d-flex justify-content-center align-items-center">
            <table class="table table-sm">
            <tr align="center" width="100">
            <th width="33%">Posicao</th>
            <th width="34%">Time</th>
            <th width="33%">Pontuacao</th>
            </tr>
            <br>  
            <tr class="" align="center">
            <th align="center">${times[0].posicao}</th>
            <th align="center">${times[0].time.nome_popular}</th>
            <th align="center">${times[0].pontos}</th>
            </tr>
            <tr align="center">
            <th>${times[1].posicao}</th>
            <th>${times[1].time.nome_popular}</th>
            <th>${times[1].pontos}</th>
            </tr>
            <tr align="center">
            <th>${times[2].posicao}</th>
            <th>${times[2].time.nome_popular}</th>
            <th>${times[2].pontos}</th>
            </tr>
            <tr align="center">
            <th>${times[3].posicao}</th>
            <th>${times[3].time.nome_popular}</th>
            <th>${times[3].pontos}</th>
            </tr>
            <tr align="center">
            <th>${times[4].posicao}</th>
            <th>${times[4].time.nome_popular}</th>
            <th>${times[4].pontos}</th>
            </tr>
            <tr align="center">
            <th>${times[5].posicao}</th>
            <th>${times[5].time.nome_popular}</th>
            <th>${times[5].pontos}</th>
            </tr>
            <tr align="center">
            <th>${times[6].posicao}</th>
            <th>${times[6].time.nome_popular}</th>
            <th>${times[6].pontos}</th>
            </tr>
            <tr align="center">
            <th>${times[7].posicao}</th>
            <th>${times[7].time.nome_popular}</th>
            <th>${times[7].pontos}</th>
            </tr>
            <tr  align="center">
            <th>${times[8].posicao}</th>
            <th>${times[8].time.nome_popular}</th>
            <th>${times[8].pontos}</th>
            </tr>
            <tr align="center">
            <th>${times[9].posicao}</th>
            <th>${times[9].time.nome_popular}</th>
            <th>${times[9].pontos}</th>
            </tr>
            <tr  align="center">
            <th>${times[10].posicao}</th>
            <th>${times[10].time.nome_popular}</th>
            <th>${times[10].pontos}</th>
            </tr>
            <tr  align="center">
            <th>${times[11].posicao}</th>
            <th>${times[11].time.nome_popular}</th>
            <th>${times[11].pontos}</th>
            </tr>
            <tr  align="center">
            <th>${times[12].posicao}</th>
            <th>${times[12].time.nome_popular}</th>
            <th>${times[12].pontos}</th>
            </tr>
            <tr align="center">
            <th>${times[13].posicao}</th>
            <th>${times[13].time.nome_popular}</th>
            <th>${times[13].pontos}</th>
            </tr>
            <tr align="center">
            <th>${times[14].posicao}</th>
            <th>${times[14].time.nome_popular}</th>
            <th>${times[14].pontos}</th>
            </tr>
            <tr  align="center">
            <th>${times[15].posicao}</th>
            <th>${times[15].time.nome_popular}</th>
            <th>${times[15].pontos}</th>
            </tr>
            <tr align="center">
            <th>${times[15].posicao}</th>
            <th>${times[15].time.nome_popular}</th>
            <th>${times[15].pontos}</th>
            </tr>
            <tr  align="center">
            <th>${times[16].posicao}</th>
            <th>${times[16].time.nome_popular}</th>
            <th>${times[16].pontos}</th>
            </tr>
            <tr align="center">
            <th>${times[17].posicao}</th>
            <th>${times[17].time.nome_popular}</th>
            <th>${times[17].pontos}</th>
            </tr>
            <tr align="center">
            <th>${times[18].posicao}</th>
            <th>${times[18].time.nome_popular}</th>
            <th>${times[18].pontos}</th>
            </tr>
            <tr align="center">
            <th>${times[19].posicao}</th>
            <th>${times[19].time.nome_popular}</th>
            <th>${times[19].pontos}</th>
            </tr>
            </tr>
            </table>
            </div>
            </div>
            `});
        }

        if(times.erro){
          tabela.innerHTML = "<br>Não foi possível localizar o endereço!";
      }
      else{
        verClassificacao();     
      }

 /*------------------------------------------------------- */     
    
 fetch("https://api.api-futebol.com.br/v1/campeonatos/10/artilharia", {
  "method": "GET",
  "headers": {
      "Authorization":  (atual == teste) ? `Bearer ${teste}` : `Bearer ${producao}`,
  }
})

.then(resposta => resposta.json())
.then(resposta => artilheiroCampeonato(resposta))
.catch(erro => console.error(erro));


function artilheiroCampeonato(artilharia){
  
  let artilheiro = document.querySelector("#artilheiroRodada");
  
  function verArtilheiro(){
      artilheiro.addEventListener("click", () =>{
      tabela.innerHTML = 
      `
      <table class="table" >
      <thead align="center">
        <tr>
          <th scope="col" width="33%" align="">Atleta</th>
          <th scope="col" width="33%" align="">Time</th>
          <th scope="col" width="33%" align="">Gols</th>
        </tr>
      </thead>
      <tbody align="center">
        <tr>
          <th align="center" scope="row">${artilharia[0].atleta.nome_popular}</th>
          <td align="center">${artilharia[0].time.nome_popular}</td>
          <td align="center">${artilharia[0].gols}</td>
          </tr>
          <tr>
          <th scope="row">${artilharia[1].atleta.nome_popular}</th>
          <td>${artilharia[1].time.nome_popular}</td>
          <td>${artilharia[1].gols}</td>
          </tr>
          <tr>
          <th scope="row">${artilharia[2].atleta.nome_popular}</th>
          <td>${artilharia[2].time.nome_popular}</td>
          <td>${artilharia[2].gols}</td>
          </tr>
          <tr>
          <th scope="row">${artilharia[3].atleta.nome_popular}</th>
          <td>${artilharia[3].time.nome_popular}</td>
          <td>${artilharia[3].gols}</td>
          </tr>
          <tr>
          <th scope="row">${artilharia[4].atleta.nome_popular}</th>
          <td>${artilharia[4].time.nome_popular}</td>
          <td>${artilharia[4].gols}</td>
        </tr>
      </tbody>
    </table>

 
`});
  }

  if(times.erro){
      tabela.innerHTML = "<br>Não foi possível localizar o endereço!";
}
else{
  verArtilheiro();
}

}

/*------------------------------------------------------- */  

fetch("https://api.api-futebol.com.br/v1/campeonatos/10/", {
"method": "GET",
"headers": {
  "Authorization":  (atual == teste) ? `Bearer ${teste}` : `Bearer ${producao}`,
}
})

.then(resposta => resposta.json())
.then(resposta => rodadaAtual(resposta))
.catch(erro => console.error(erro));

function rodadaAtual(...resposta){

let rodada = resposta[0].rodada_atual.rodada;

if(times.erro){
tabela.innerHTML = "<br>Não foi possível localizar o endereço!";
}
else{
let rodada = resposta[0].rodada_atual.rodada;
}

/*------------------------------------------------------- */


fetch("https://api.api-futebol.com.br/v1/campeonatos/10/rodadas/"+rodada, {
"method": "GET",
"headers": {
  "Authorization": (atual == teste) ? `Bearer ${teste}` : `Bearer ${producao}`,
}
})

.then(resposta => resposta.json())
.then(resposta => jogosRodada(resposta))
.catch(erro => console.error(erro));

function jogosRodada(rodada){

var jogosRodada = document.querySelector("#jogoRodada");

function verJogos(){
  jogosRodada.addEventListener("click", () =>{
  tabela.innerHTML = 
  `   
        <table class="table table-sm">
          <thead>
              <tr>
                <th width="33%">Dia e Hora</th>
                <th width="33%">Times</th>
                <th width="33%">Placar</th>
              </tr>  
          </thead>
            <tr ">
                <td >${rodada.partidas[0].data_realizacao}</td>  
                <td><img src="${rodada.partidas[0].time_mandante.escudo}" width="20px"> ${rodada.partidas[0].time_mandante.nome_popular}</td>
                <td>${rodada.partidas[0].placar_mandante}</td>
            </tr> 
              <tr>
              <td>${rodada.partidas[0].hora_realizacao}</td>
              <td><img src="${rodada.partidas[0].time_visitante.escudo}" width="20px"> ${rodada.partidas[0].time_visitante.nome_popular}</td>
              <td>${rodada.partidas[0].placar_visitante}</td>
            </tr>  
 
  `});
}
if(times.erro){
tabela.innerHTML = "<br>Não foi possível localizar o endereço!";
}
else{
verJogos();
console.log(rodada.partidas[0]);
}

}

}

  
}
