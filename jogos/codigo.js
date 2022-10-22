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
    thead.appendChild(tr1);
    table.appendChild(thead);

    element.partidas.forEach(jogo => {
      const tr = document.createElement("tr");
      const td1 = document.createElement("td");
      const td2 = document.createElement("td");
      const td3 = document.createElement("td");
      td1.innerHTML = jogo.grupo;
      var nome1 = jogo.confronto.mandante.name.slice(0,3).toLocaleUpperCase();
      var nome2 = jogo.confronto.visitante.name.slice(0,3).toLocaleUpperCase();
      td2.innerHTML = `${nome1} <img src='${jogo.confronto.mandante.bandeira}'> X <img src='${jogo.confronto.visitante.bandeira}'>${nome2}`
      td3.innerHTML = jogo.hora;
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

dados();
