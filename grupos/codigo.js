import myJson from './grupos.json' assert {type: 'json'};

function dados(dadosProcurados) {
  const grupos = dadosProcurados;
  const body = document.querySelector("body");
  const div = document.createElement("div");
  div.classList.add("containerTabela");

  grupos.forEach((element) => {

    const table = document.createElement("table");
    let grupoId = "Grupo " + (element.id);
    table.id = grupoId.toUpperCase().trim();
    table.classList.add("tabela");

    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    const tr1 = document.createElement("tr");
    tr1.innerHTML = "<th>Grupo " + (element.id) + "</th>";
    thead.appendChild(tr1);
    table.appendChild(thead);

    element.paises.forEach(pais => {
      const tr = document.createElement("tr");
      const td = document.createElement("td");
      let aux = pais.name;
      td.id = aux.toLowerCase();
      td.innerHTML = `<img src = "${pais.bandeira}" alt="Bandeira_${pais.name}"> ${pais.name}`
      tr.appendChild(td);
      tbody.appendChild(tr)
    }
    )
    table.appendChild(tbody);
    div.appendChild(table);
  });
  body.appendChild(div);
}

function buscaSelecao() {
  let pesquisa = document.getElementById("pesquisa").value;
  let resposta = document.getElementById(`${pesquisa.toLowerCase().trim()}`);
  if(resposta){
    console.log("selecao encontrada")
    limparResultado(resposta,resposta.id);
    resposta.id = "destaquePais";
  }
}

function buscaGrupo() {
  let pesquisa = document.getElementById("pesquisa").value;
  let resposta = document.getElementById(`${pesquisa.toUpperCase().trim()}`);
  if(resposta){
    console.log("grupo encontrado")
    limparResultado(resposta,resposta.id);
    resposta.id = "destaqueGrupo";
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

dados(myJson);
window.buscaSelecao = buscaSelecao;
window.buscaGrupo = buscaGrupo;
window.limparResultado = limparResultado;