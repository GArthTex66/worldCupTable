import jogos from './jogos.json' assert {type: 'json'}; 

function dados() {
  
  const body = document.querySelector("body");
  const div = document.createElement("div");
  div.classList.add("containerTabela");

  jogos.forEach((element) => {

    const table = document.createElement("table");
    table.classList.add("tabela");

    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    const tr1 = document.createElement("tr");
    tr1.innerHTML =  `<th colspan='3'>${element.data}</th>`;
    tr1.classList.add(element.data);
    thead.appendChild(tr1);
    table.appendChild(thead);

    element.partidas.forEach(jogo => {
      const tr = document.createElement("tr");
      const td1 = document.createElement("td");
      const td2 = document.createElement("td");
      const td3 = document.createElement("td");
      td1.innerHTML = jogo.grupo;
      var nome1 = jogo.confronto.mandante.name.slice(0,3).toUpperCase();
      var nome2 = jogo.confronto.visitante.name.slice(0,3).toUpperCase();
      td2.innerHTML = `${nome1} <img src='${jogo.confronto.mandante.bandeira}'> X <img src='${jogo.confronto.visitante.bandeira}'>${nome2}`;
      td3.innerHTML = jogo.hora;
      // a mesma TAG pode receber várias Classes mas só um ID.
      tr.classList.add(jogo.grupo);
      tr.classList.add(jogo.hora);
      tr.classList.add(nome1);
      tr.classList.add(nome2);
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tbody.appendChild(tr)
      }
    )
    table.appendChild(tbody);
    div.appendChild(table);
  });
  body.appendChild(div);
}

function busca() {
  let pesquisa = document.getElementById("pesquisa").value;
  let resposta = document.getElementsByClassName(`${pesquisa.slice(0,3).toUpperCase().trim()}`);
  if(resposta){
    console.log("resultado encontrado");
    limparResultado(resposta,resposta.id);
    resposta.id = "destaque";
  }
}

function buscaData() {
  let pesquisa = document.getElementById("pesquisa").value;
  let resposta = document.getElementsByClassName(pesquisa);
  if(resposta){
    console.log("data encontrada");
    limparResultado(resposta,resposta.id);
    resposta.id = "destaque";
  }
}

function limparResultado(resposta, antigoId)
{
  setTimeout(
    ()=>{
      resposta.id = antigoId
    },
    3000
  )
}

dados();
window.busca = busca;
window.buscaData = buscaData;
window.limparResultado = limparResultado;
