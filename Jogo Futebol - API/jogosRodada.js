document.getElementById("consultaEndereco").onclick = function(){
 

fetch("https://api.api-futebol.com.br/v1/campeonatos/10/rodadas/25", {
  "method": "GET",
  "headers": {
      "Authorization": "Bearer live_35eab49fecc1d23d5c3645c39bad11",
  }
})

.then(resposta => resposta.json())
.then(resposta => tabelaRodada(resposta))
.catch(erro => console.error(erro));



  function tabelaRodada(...rodada){

    let rodadaAnterior = document.querySelector("#rodadaAnterior");
    
    let resultado = document.querySelector('#tabela');
    if(rodada.erro){
      tabela.innerHTML = "<br>Não foi possível localizar o endereço!";
    }
    
    else{
        tabela.innerHTML = 
        `
        
        <table align="center" style="border border-success">
        <tr align="center">
        <th width="100"></th>
        <th width="75"></th>
        <th width="0"></th>
        <th width="100">${rodada[0].nome}</th>
        <th width="75"></th>
        <th width="100"></th>
        <tr align="center" width="100">
        <th width="100">Partida</th>
        <th width="100">Time Mandante</th>
        <th width="100">Placar Mandante</th>
        <th width="100">Placar Visitante</th>
        <th width="100">Time Visitante</th>
        <th width="100">Data</th>
        </tr>
        <br>  
        <tr class="border border-success" align="center">
        <th onclick="location.href=  style="cursor: pointer;">Partida 1:</th>
        <th>${rodada[0].partidas[0].time_mandante.nome_popular}</th>
        <th>${rodada[0].partidas[0].placar_mandante}</th>
        <th>${rodada[0].partidas[0].placar_visitante}</th>
        <th>${rodada[0].partidas[0].time_visitante.nome_popular}</th>
        <th>${rodada[0].partidas[0].data_realizacao}</th>
        </tr>
        <br>  
        <tr class="border border-success" align="center">
        <th>Partida 2:</th>
        <th>${rodada[0].partidas[1].time_mandante.nome_popular}</th>
        <th>${rodada[0].partidas[1].placar_mandante}</th>
        <th>${rodada[0].partidas[1].placar_visitante}</th>
        <th>${rodada[0].partidas[1].time_visitante.nome_popular}</th>
        <th>${rodada[0].partidas[1].data_realizacao}</th>
        </tr>
        <br>  
        <tr class="border border-success" align="center">
        <th>Partida 3:</th>
        <th>${rodada[0].partidas[2].time_mandante.nome_popular}</th>
        <th>${rodada[0].partidas[2].placar_mandante}</th>
        <th>${rodada[0].partidas[2].placar_visitante}</th>
        <th>${rodada[0].partidas[2].time_visitante.nome_popular}</th>
        <th>${rodada[0].partidas[2].data_realizacao}</th>
        </tr>
        <br>  
        <tr class="border border-success" align="center">
        <th>Partida 4:</th>
        <th>${rodada[0].partidas[3].time_mandante.nome_popular}</th>
        <th>${rodada[0].partidas[3].placar_mandante}</th>
        <th>${rodada[0].partidas[3].placar_visitante}</th>
        <th>${rodada[0].partidas[3].time_visitante.nome_popular}</th>
        <th>${rodada[0].partidas[3].data_realizacao}</th>
        </tr>
        <br>  
        <tr class="border border-success" align="center">
        <th>Partida 5:</th>
        <th>${rodada[0].partidas[4].time_mandante.nome_popular}</th>
        <th>${rodada[0].partidas[4].placar_mandante}</th>
        <th>${rodada[0].partidas[4].placar_visitante}</th>
        <th>${rodada[0].partidas[4].time_visitante.nome_popular}</th>
        <th>${rodada[0].partidas[4].data_realizacao}</th>
        </tr>
        <br>  
        <tr class="border border-success" align="center">
        <th>Partida 6:</th>
        <th>${rodada[0].partidas[5].time_mandante.nome_popular}</th>
        <th>${rodada[0].partidas[5].placar_mandante}</th>
        <th>${rodada[0].partidas[5].placar_visitante}</th>
        <th>${rodada[0].partidas[5].time_visitante.nome_popular}</th>
        <th>${rodada[0].partidas[5].data_realizacao}</th>
        </tr>
        <br>  
        <tr class="border border-success" align="center">
        <th>Partida 7:</th>
        <th>${rodada[0].partidas[6].time_mandante.nome_popular}</th>
        <th>${rodada[0].partidas[6].placar_mandante}</th>
        <th>${rodada[0].partidas[6].placar_visitante}</th>
        <th>${rodada[0].partidas[6].time_visitante.nome_popular}</th>
        <th>${rodada[0].partidas[6].data_realizacao}</th>
        </tr>
        <br>  
        <tr class="border border-success" align="center">
        <th>Partida 8:</th>
        <th>${rodada[0].partidas[7].time_mandante.nome_popular}</th>
        <th>${rodada[0].partidas[7].placar_mandante}</th>
        <th>${rodada[0].partidas[7].placar_visitante}</th>
        <th>${rodada[0].partidas[7].time_visitante.nome_popular}</th>
        <th>${rodada[0].partidas[7].data_realizacao}</th>
        </tr>
        <br>  
        <tr class="border border-success" align="center">
        <th>Partida 9:</th>
        <th>${rodada[0].partidas[8].time_mandante.nome_popular}</th>
        <th>${rodada[0].partidas[8].placar_mandante}</th>
        <th>${rodada[0].partidas[8].placar_visitante}</th>
        <th>${rodada[0].partidas[8].time_visitante.nome_popular}</th>
        <th>${rodada[0].partidas[8].data_realizacao}</th>
        </tr>
        <br>  
        <tr class="border border-success" align="center">
        <th>Partida 10:</th>
        <th>${rodada[0].partidas[9].time_mandante.nome_popular}</th>
        <th>${rodada[0].partidas[9].placar_mandante}</th>
        <th>${rodada[0].partidas[9].placar_visitante}</th>
        <th>${rodada[0].partidas[9].time_visitante.nome_popular}</th>
        <th>${rodada[0].partidas[9].data_realizacao}</th>
        </tr>
        <br>
        `}

        console.log(rodada);
};


}



/*

        
        else if(rodada[0].partidas.length = 2){
          tabela.innerHTML = 
          `
          <br>
          <table align="center"  style="border border-success">
          <tr align="center" width="500">
          <th width="100"></th>
          <th width="300">${rodada[0].nome}</th>
          <th width="100"></th>
          <tr align="center" width="100">
          <th width="100">Partida</th>
          <th width="300">Placar</th>
          <th width="100">Data</th>
          </tr>
          <br>  
          <tr class="border border-success" align="center">
          <th>Partida 1:</th>
          <th>${rodada[0].partidas[0].placar}</th>
          <th>${rodada[0].partidas[0].data_realizacao}</th>
          </tr>
          <br> 
          <tr class="border border-success" align="center">
          <th>Partida 2:</th>
          <th>${rodada[0].partidas[1].placar}</th>
          <th>${rodada[0].partidas[1].data_realizacao}</th>
          </tr>
          <br> 
          `}
        
        else if(rodada[0].partidas.length = 3){
          tabela.innerHTML = 
          `
          <br>
          <table align="center"  style="border border-success">
          <tr align="center" width="500">
          <th width="100"></th>
          <th width="300">${rodada[0].nome}</th>
          <th width="100"></th>
          <tr align="center" width="100">
          <th width="100">Partida</th>
          <th width="300">Placar</th>
          <th width="100">Data</th>
          </tr>
          <br>  
          <tr class="border border-success" align="center">
          <th>Partida 1:</th>
          <th>${rodada[0].partidas[0].placar}</th>
          <th>${rodada[0].partidas[0].data_realizacao}</th>
          </tr>
          <br> 
          <tr class="border border-success" align="center">
          <th>Partida 2:</th>
          <th>${rodada[0].partidas[1].placar}</th>
          <th>${rodada[0].partidas[1].data_realizacao}</th>
          </tr>
          <br> 
          <tr class="border border-success" align="center">
          <th>Partida 3:</th>
          <th>${rodada[0].partidas[2].placar}</th>
          <th>${rodada[0].partidas[2].data_realizacao}</th>
          </tr>
          <br> 
          `}
        
        else if(rodada[0].partidas.length = 4){
          tabela.innerHTML = 
          `
          <br>
          <table align="center"  style="border border-success">
          <tr align="center" width="500">
          <th width="100"></th>
          <th width="300">${rodada[0].nome}</th>
          <th width="100"></th>
          <tr align="center" width="100">
          <th width="100">Partida</th>
          <th width="300">Placar</th>
          <th width="100">Data</th>
          </tr>
          <br>  
          <tr class="border border-success" align="center">
          <th>Partida 1:</th>
          <th>${rodada[0].partidas[0].placar}</th>
          <th>${rodada[0].partidas[0].data_realizacao}</th>
          </tr>
          <br> 
          <tr class="border border-success" align="center">
          <th>Partida 2:</th>
          <th>${rodada[0].partidas[1].placar}</th>
          <th>${rodada[0].partidas[1].data_realizacao}</th>
          </tr>
          <br> 
          <tr class="border border-success" align="center">
          <th>Partida 3:</th>
          <th>${rodada[0].partidas[2].placar}</th>
          <th>${rodada[0].partidas[2].data_realizacao}</th>
          </tr>
          <br> 
          <tr class="border border-success" align="center">
          <th>Partida 4:</th>
          <th>${rodada[0].partidas[3].placar}</th>
          <th>${rodada[0].partidas[3].data_realizacao}</th>
          </tr>
          <br> 
          `}
        
        else if(rodada[0].partidas.length = 5){
          tabela.innerHTML = 
          `
          <br>
          <table align="center"  style="border border-success">
          <tr align="center" width="500">
          <th width="100"></th>
          <th width="300">${rodada[0].nome}</th>
          <th width="100"></th>
          <tr align="center" width="100">
          <th width="100">Partida</th>
          <th width="300">Placar</th>
          <th width="100">Data</th>
          </tr>
          <br>  
          <tr class="border border-success" align="center">
          <th>Partida 1:</th>
          <th>${rodada[0].partidas[0].placar}</th>
          <th>${rodada[0].partidas[0].data_realizacao}</th>
          </tr>
          <br> 
          <tr class="border border-success" align="center">
          <th>Partida 2:</th>
          <th>${rodada[0].partidas[1].placar}</th>
          <th>${rodada[0].partidas[1].data_realizacao}</th>
          </tr>
          <br> 
          <tr class="border border-success" align="center">
          <th>Partida 3:</th>
          <th>${rodada[0].partidas[2].placar}</th>
          <th>${rodada[0].partidas[2].data_realizacao}</th>
          </tr>
          <br> 
          <tr class="border border-success" align="center">
          <th>Partida 4:</th>
          <th>${rodada[0].partidas[3].placar}</th>
          <th>${rodada[0].partidas[3].data_realizacao}</th>
          </tr>
          <br>
          <tr class="border border-success" align="center">
          <th>Partida 5:</th>
          <th>${rodada[0].partidas[4].placar}</th>
          <th>${rodada[0].partidas[4].data_realizacao}</th>
          </tr>
          <br> 
          `}
        
        else if(rodada[0].partidas.length = 6){
          tabela.innerHTML = 
          `
          <br>
          <table align="center"  style="border border-success">
          <tr align="center" width="500">
          <th width="100"></th>
          <th width="300">${rodada[0].nome}</th>
          <th width="100"></th>
          <tr align="center" width="100">
          <th width="100">Partida</th>
          <th width="300">Placar</th>
          <th width="100">Data</th>
          </tr>
          <br>  
          <tr class="border border-success" align="center">
          <th>Partida 1:</th>
          <th>${rodada[0].partidas[0].placar}</th>
          <th>${rodada[0].partidas[0].data_realizacao}</th>
          </tr>
          <br> 
          <tr class="border border-success" align="center">
          <th>Partida 2:</th>
          <th>${rodada[0].partidas[1].placar}</th>
          <th>${rodada[0].partidas[1].data_realizacao}</th>
          </tr>
          <br> 
          <tr class="border border-success" align="center">
          <th>Partida 3:</th>
          <th>${rodada[0].partidas[2].placar}</th>
          <th>${rodada[0].partidas[2].data_realizacao}</th>
          </tr>
          <br> 
          <tr class="border border-success" align="center">
          <th>Partida 4:</th>
          <th>${rodada[0].partidas[3].placar}</th>
          <th>${rodada[0].partidas[3].data_realizacao}</th>
          </tr>
          <br> 
          <tr class="border border-success" align="center">
          <th>Partida 5:</th>
          <th>${rodada[0].partidas[4].placar}</th>
          <th>${rodada[0].partidas[4].data_realizacao}</th>
          </tr>
          <br> 
          <tr class="border border-success" align="center">
          <th>Partida 6:</th>
          <th>${rodada[0].partidas[5].placar}</th>
          <th>${rodada[0].partidas[5].data_realizacao}</th>
          </tr>
          <br> 
        `}
        
        else if(rodada[0].partidas.length = 7){
          tabela.innerHTML = 
          `
          <br>
          <table align="center"  style="border border-success">
          <tr align="center" width="500">
          <th width="100"></th>
          <th width="300">${rodada[0].nome}</th>
          <th width="100"></th>
          <tr align="center" width="100">
          <th width="100">Partida</th>
          <th width="300">Placar</th>
          <th width="100">Data</th>
          </tr>
          <br>  
          <tr class="border border-success" align="center">
          <th>Partida 1:</th>
          <th>${rodada[0].partidas[0].placar}</th>
          <th>${rodada[0].partidas[0].data_realizacao}</th>
          </tr>
          <br> 
          <tr class="border border-success" align="center">
          <th>Partida 2:</th>
          <th>${rodada[0].partidas[1].placar}</th>
          <th>${rodada[0].partidas[1].data_realizacao}</th>
          </tr>
          <br> 
          <tr class="border border-success" align="center">
          <th>Partida 3:</th>
          <th>${rodada[0].partidas[2].placar}</th>
          <th>${rodada[0].partidas[2].data_realizacao}</th>
          </tr>
          <br> 
          <tr class="border border-success" align="center">
          <th>Partida 4:</th>
          <th>${rodada[0].partidas[3].placar}</th>
          <th>${rodada[0].partidas[3].data_realizacao}</th>
          </tr>
          <br> 
          <tr class="border border-success" align="center">
          <th>Partida 5:</th>
          <th>${rodada[0].partidas[4].placar}</th>
          <th>${rodada[0].partidas[4].data_realizacao}</th>
          </tr>
          <br> 
          <tr class="border border-success" align="center">
          <th>Partida 6:</th>
          <th>${rodada[0].partidas[5].placar}</th>
          <th>${rodada[0].partidas[5].data_realizacao}</th>
          </tr>
          <br> 
          <tr class="border border-success" align="center">
          <th>Partida 7:</th>
          <th>${rodada[0].partidas[6].placar}</th>
          <th>${rodada[0].partidas[6].data_realizacao}</th>
          </tr>
          <br> 
        `}
        
        else if(rodada[0].partidas.length = 8){
          tabela.innerHTML = 
          `
          <br>
          <table align="center"  style="border border-success">
          <tr align="center" width="500">
          <th width="100"></th>
          <th width="300">${rodada[0].nome}</th>
          <th width="100"></th>
          <tr align="center" width="100">
          <th width="100">Partida</th>
          <th width="300">Placar</th>
          <th width="100">Data</th>
          </tr>
          <br>  
          <tr class="border border-success" align="center">
          <th>Partida 1:</th>
          <th>${rodada[0].partidas[0].placar}</th>
          <th>${rodada[0].partidas[0].data_realizacao}</th>
          </tr>
          <br> 
          <tr class="border border-success" align="center">
          <th>Partida 2:</th>
          <th>${rodada[0].partidas[1].placar}</th>
          <th>${rodada[0].partidas[1].data_realizacao}</th>
          </tr>
          <br> 
          <tr class="border border-success" align="center">
          <th>Partida 3:</th>
          <th>${rodada[0].partidas[2].placar}</th>
          <th>${rodada[0].partidas[2].data_realizacao}</th>
          </tr>
          <br> 
          <tr class="border border-success" align="center">
          <th>Partida 4:</th>
          <th>${rodada[0].partidas[3].placar}</th>
          <th>${rodada[0].partidas[3].data_realizacao}</th>
          </tr>
          <br> 
          <tr class="border border-success" align="center">
          <th>Partida 5:</th>
          <th>${rodada[0].partidas[4].placar}</th>
          <th>${rodada[0].partidas[4].data_realizacao}</th>
          </tr>
          <br> 
          <tr class="border border-success" align="center">
          <th>Partida 6:</th>
          <th>${rodada[0].partidas[5].placar}</th>
          <th>${rodada[0].partidas[5].data_realizacao}</th>
          </tr>
          <br> 
          <tr class="border border-success" align="center">
          <th>Partida 7:</th>
          <th>${rodada[0].partidas[6].placar}</th>
          <th>${rodada[0].partidas[6].data_realizacao}</th>
          </tr>
          <br> 
          <tr class="border border-success" align="center">
          <th>Partida 8:</th>
          <th>${rodada[0].partidas[7].placar}</th>
          <th>${rodada[0].partidas[7].data_realizacao}</th>
          </tr>
          <br> 
        `}
        
        else if(rodada[0].partidas.length = 9){
          tabela.innerHTML = 
          `
          <br>
          <table align="center"  style="border border-success">
          <tr align="center" width="500">
          <th width="100"></th>
          <th width="300">${rodada[0].nome}</th>
          <th width="100"></th>
          <tr align="center" width="100">
          <th width="100">Partida</th>
          <th width="300">Placar</th>
          <th width="100">Data</th>
          </tr>
          <br>  
          <tr class="border border-success" align="center">
          <th>Partida 1:</th>
          <th>${rodada[0].partidas[0].placar}</th>
          <th>${rodada[0].partidas[0].data_realizacao}</th>
          </tr>
          <br> 
          <tr class="border border-success" align="center">
          <th>Partida 2:</th>
          <th>${rodada[0].partidas[1].placar}</th>
          <th>${rodada[0].partidas[1].data_realizacao}</th>
          </tr>
          <br> 
          <tr class="border border-success" align="center">
          <th>Partida 3:</th>
          <th>${rodada[0].partidas[2].placar}</th>
          <th>${rodada[0].partidas[2].data_realizacao}</th>
          </tr>
          <br> 
          <tr class="border border-success" align="center">
          <th>Partida 4:</th>
          <th>${rodada[0].partidas[3].placar}</th>
          <th>${rodada[0].partidas[3].data_realizacao}</th>
          </tr>
          <br> 
          <tr class="border border-success" align="center">
          <th>Partida 5:</th>
          <th>${rodada[0].partidas[4].placar}</th>
          <th>${rodada[0].partidas[4].data_realizacao}</th>
          </tr>
          <br> 
          <tr class="border border-success" align="center">
          <th>Partida 6:</th>
          <th>${rodada[0].partidas[5].placar}</th>
          <th>${rodada[0].partidas[5].data_realizacao}</th>
          </tr>
          <br> 
          <tr class="border border-success" align="center">
          <th>Partida 7:</th>
          <th>${rodada[0].partidas[6].placar}</th>
          <th>${rodada[0].partidas[6].data_realizacao}</th>
          </tr>
          <br> 
          <tr class="border border-success" align="center">
          <th>Partida 8:</th>
          <th>${rodada[0].partidas[7].placar}</th>
          <th>${rodada[0].partidas[7].data_realizacao}</th>
          </tr>
          <br> 
          <tr class="border border-success" align="center">
          <th>Partida 9:</th>
          <th>${rodada[0].partidas[8].placar}</th>
          <th>${rodada[0].partidas[8].data_realizacao}</th>
          </tr>
          <br> 
        `}
        
        else if(rodada[0].partidas.length = 10){
          tabela.innerHTML = 
          `
          <br>
          <table align="center"  style="border border-success">
          <tr align="center" width="500">
          <th width="100"></th>
          <th width="300">${rodada[0].nome}</th>
          <th width="100"></th>
          <tr align="center" width="100">
          <th width="100">Partida</th>
          <th width="300">Placar</th>
          <th width="100">Data</th>
          </tr>
          <br>  
          <tr class="border border-success" align="center">
          <th>Partida 1:</th>
          <th>${rodada[0].partidas[0].placar}</th>
          <th>${rodada[0].partidas[0].data_realizacao}</th>
          </tr>
          <br> 
          <tr class="border border-success" align="center">
          <th>Partida 2:</th>
          <th>${rodada[0].partidas[1].placar}</th>
          <th>${rodada[0].partidas[1].data_realizacao}</th>
          </tr>
          <br> 
          <tr class="border border-success" align="center">
          <th>Partida 3:</th>
          <th>${rodada[0].partidas[2].placar}</th>
          <th>${rodada[0].partidas[2].data_realizacao}</th>
          </tr>
          <br> 
          <tr class="border border-success" align="center">
          <th>Partida 4:</th>
          <th>${rodada[0].partidas[3].placar}</th>
          <th>${rodada[0].partidas[3].data_realizacao}</th>
          </tr>
          <br> 
          <tr class="border border-success" align="center">
          <th>Partida 5:</th>
          <th>${rodada[0].partidas[4].placar}</th>
          <th>${rodada[0].partidas[4].data_realizacao}</th>
          </tr>
          <br> 
          <tr class="border border-success" align="center">
          <th>Partida 6:</th>
          <th>${rodada[0].partidas[5].placar}</th>
          <th>${rodada[0].partidas[5].data_realizacao}</th>
          </tr>
          <br> 
          <tr class="border border-success" align="center">
          <th>Partida 7:</th>
          <th>${rodada[0].partidas[6].placar}</th>
          <th>${rodada[0].partidas[6].data_realizacao}</th>
          </tr>
          <br> 
          <tr class="border border-success" align="center">
          <th>Partida 8:</th>
          <th>${rodada[0].partidas[7].placar}</th>
          <th>${rodada[0].partidas[7].data_realizacao}</th>
          </tr>
          <br> 
          <tr class="border border-success" align="center">
          <th>Partida 9:</th>
          <th>${rodada[0].partidas[8].placar}</th>
          <th>${rodada[0].partidas[8].data_realizacao}</th>
          </tr>
          <br> 
          <tr class="border border-success" align="center">
          <th>Partida 10:</th>
          <th>${rodada[0].partidas[9].placar}</th>
          <th>${rodada[0].partidas[9].data_realizacao}</th>
          </tr>
          <br> 
        `}

  



  Partida 2: ${rodada[0].partidas[1].placar}
  ${rodada[0].partidas[1].data_realizacao}
  <br>
  Partida 3: ${rodada[0].partidas[2].placar}
  ${rodada[0].partidas[2].data_realizacao}
  <br>
  Partida 4: ${rodada[0].partidas[3].placar}
  ${rodada[0].partidas[3].data_realizacao}
  <br>
  Partida 5: ${rodada[0].partidas[4].placar}
  ${rodada[0].partidas[4].data_realizacao}
  <br>
  Partida 6: ${rodada[0].partidas[5].placar}
  ${rodada[0].partidas[5].data_realizacao}
  <br>
  Partida 7: ${rodada[0].partidas[6].placar}
  ${rodada[0].partidas[6].data_realizacao}
  <br>
  Partida 8: ${rodada[0].partidas[7].placar}
  ${rodada[0].partidas[7].data_realizacao}
  <br>
  Partida 9: ${rodada[0].partidas[8].placar}
  ${rodada[0].partidas[8].data_realizacao}
  <br>
  Partida 10: ${rodada[0].partidas[9].placar}
  ${rodada[0].partidas[8].data_realizacao}
*/