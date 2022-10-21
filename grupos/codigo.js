let Grupos = [
  {
    "id": "A",
    "paises": [
      {
        "name": "Qatar",
        "bandeira": "https://s.sde.globo.com/media/organizations/2019/09/06/Catar.svg"
      },
      {
        "name": "Equador",
        "bandeira": "https://s.sde.globo.com/media/organizations/2019/07/15/Equador.svg"
      },
      {
        "name": "Senegal",
        "bandeira": "https://s.sde.globo.com/media/organizations/2019/09/03/Senegal.svg"
      },
      {
        "name": "Holanda",
        "bandeira": "https://s.sde.globo.com/media/organizations/2019/09/16/Holanda.svg"
      }
    ]
  },
  {
    "id": "B",
    "paises": [
      {
        "name": "Inglaterra",
        "bandeira": "https://s.sde.globo.com/media/organizations/2019/09/13/Inglaterra.svg"
      },
      {
        "name": "Irã",
        "bandeira": "https://s.sde.globo.com/media/organizations/2019/09/01/Ir%C3%A3.svg"
      },
      {
        "name": "Estados Unidos",
        "bandeira": "https://s.sde.globo.com/media/organizations/2019/07/16/Estados_Unidos.svg"
      },
      {
        "name": "País de Gales",
        "bandeira": "https://s.sde.globo.com/media/organizations/2019/09/17/Pa%C3%ADs_de_Gales.svg"
      }
    ]
  },
  {
    "id": "C",
    "paises": [
      {
        "name": "Argentina",
        "bandeira": "https://s.sde.globo.com/media/organizations/2019/07/15/Argentina.svg"
      },
      {
        "name": "Arábia Saudita",
        "bandeira": "https://s.sde.globo.com/media/organizations/2019/09/05/Ar%C3%A1bia_Saudita.svg"
      },
      {
        "name": "México",
        "bandeira": "https://s.sde.globo.com/media/organizations/2019/07/15/M%C3%A9xico.svg"
      },
      {
        "name": "Polônia",
        "bandeira": "https://s.sde.globo.com/media/organizations/2019/09/02/Polonia_Rl0m1A5.svg"
      }
    ]
  },
  {
    "id": "D",
    "paises": [
      {
        "name": "França",
        "bandeira": "https://s.sde.globo.com/media/organizations/2019/09/03/Fran%C3%A7a.svg"
      },
      {
        "name": "Austrália",
        "bandeira": "https://s.sde.globo.com/media/organizations/2019/09/02/Australia.svg"
      },
      {
        "name": "Dinamarca",
        "bandeira": "https://s.sde.globo.com/media/organizations/2019/09/16/Dinamarca.svg"
      },
      {
        "name": "Tunísia",
        "bandeira": "https://s.sde.globo.com/media/organizations/2018/03/10/tunisia.svg"
      }
    ]
  },
  {
    "id": "E",
    "paises": [
      {
        "name": "Espanha",
        "bandeira": "https://s.sde.globo.com/media/organizations/2019/09/03/Espanha.svg"
      },
      {
        "name": "Costa Rica",
        "bandeira": "https://s.sde.globo.com/media/organizations/2019/07/14/Costa_Rica.svg"
      },
      {
        "name": "Alemanha",
        "bandeira": "https://s.sde.globo.com/media/organizations/2019/09/03/Alemanha.svg"
      },
      {
        "name": "Japão",
        "bandeira": "https://s.sde.globo.com/media/organizations/2019/09/03/Japao.svg"
      }
    ]
  },
  {
    "id": "F",
    "paises": [
      {
        "name": "Bélgica",
        "bandeira": "https://s.sde.globo.com/media/organizations/2019/09/15/B%C3%A9lgica.svg"
      },
      {
        "name": "Canadá",
        "bandeira": "https://s.sde.globo.com/media/organizations/2019/07/15/Canad%C3%A1.svg"
      },
      {
        "name": "Marrocos",
        "bandeira": "https://s.sde.globo.com/media/organizations/2019/09/10/Marrocos.svg"
      },
      {
        "name": "Croácia",
        "bandeira": "https://s.sde.globo.com/media/organizations/2019/09/16/Cro%C3%A1cia.svg"
      }
    ]
  },
  {
    "id": "G",
    "paises": [
      {
        "name": "Brasil",
        "bandeira": "https://s.sde.globo.com/media/organizations/2019/07/16/Brasil_rgYHF6Z.svg"
      },
      {
        "name": "Sérvia",
        "bandeira": "https://s.sde.globo.com/media/organizations/2019/09/02/Servia.svg"
      },
      {
        "name": "Suiça",
        "bandeira": "https://s.sde.globo.com/media/organizations/2019/09/15/Su%C3%AD%C3%A7a.svg"
      },
      {
        "name": "Camarões",
        "bandeira": "https://s.sde.globo.com/media/organizations/2019/09/10/Camar%C3%B5es.svg"
      }
    ]
  },
  {
    "id": "H",
    "paises": [
      {
        "name": "Portugal",
        "bandeira": "https://s.sde.globo.com/media/organizations/2019/09/17/Portugal.svg"
      },
      {
        "name": "Gana",
        "bandeira": "https://s.sde.globo.com/media/organizations/2019/09/08/Gana.svg"
      },
      {
        "name": "Uruguai",
        "bandeira": "https://s.sde.globo.com/media/organizations/2019/07/16/Uruguai.svg"
      },
      {
        "name": "Coreia do Sul",
        "bandeira": "https://s.sde.globo.com/media/organizations/2019/09/01/Coreia_do_Sul.svg"
      }
    ]
  }
];

function dados() {

  const body = document.querySelector("body");
  const div = document.createElement("div");
  div.classList.add("containerTabela");

  Grupos.forEach((element, index) => {

    const table = document.createElement("table");
    let aux = "Grupo " + (element.id);
    table.id = aux.toLocaleUpperCase();
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
  let resposta = document.getElementById(`${pesquisa.toLowerCase()}`);
  resposta.id = "destaquePais";
}

function buscaGrupo() {
  let pesquisa = document.getElementById("pesquisa").value;
  let resposta = document.getElementById(`${pesquisa.toUpperCase()}`);
  resposta.id = "destaqueGrupo";
}