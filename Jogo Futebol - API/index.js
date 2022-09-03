
fetch("https://api.api-futebol.com.br/v1/campeonatos", {
  "method": "GET",
  "headers": {
      "Authorization": "Bearer test_fa754529ed2c0e3d075468837005ee",
  }
})

.then(resposta => resposta.json())
.then(resposta => listaCampeonatos(resposta))
.catch(erro => console.error(erro));
  
function listaCampeonatos(lista){
  
  const textoCabecalho = document.querySelector("#textoCabecalho")
 
  if(lista.erro){
    textoCabecalho.innerHTML = "<br>Não foi possível localizar o endereço!";
  }
  else{
  console.log(lista)
}
   
}