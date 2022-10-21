

let Grupos = [
  {
    id: "A",
    paises: [
      { name: 'Brasil', bandeira: 'https://s.sde.globo.com/media/organizations/2019/09/06/Catar.svg' },
      { name: 'Sérvia', bandeira: 'https://s.sde.globo.com/media/organizations/2019/09/06/Catar.svg' },
      { name: 'Suiça', bandeira: 'https://s.sde.globo.com/media/organizations/2019/09/06/Catar.svg' },
      { name: 'Camarões', bandeira: 'https://s.sde.globo.com/media/organizations/2019/09/06/Catar.svg' },
    ]
  },
  {
    id: "B",
    paises: [
      { name: 'Brasil', bandeira: 'https://s.sde.globo.com/media/organizations/2019/09/06/Catar.svg' },
      { name: 'Sérvia', bandeira: 'https://s.sde.globo.com/media/organizations/2019/09/06/Catar.svg' },
      { name: 'Suiça', bandeira: 'https://s.sde.globo.com/media/organizations/2019/09/06/Catar.svg' },
      { name: 'Camarões', bandeira: 'https://s.sde.globo.com/media/organizations/2019/09/06/Catar.svg' },
    ]
  },
  {
    id: "C",
    paises: [
      { name: 'Brasil', bandeira: 'https://s.sde.globo.com/media/organizations/2019/09/06/Catar.svg' },
      { name: 'Sérvia', bandeira: 'https://s.sde.globo.com/media/organizations/2019/09/06/Catar.svg' },
      { name: 'Suiça', bandeira: 'https://s.sde.globo.com/media/organizations/2019/09/06/Catar.svg' },
      { name: 'Camarões', bandeira: 'https://s.sde.globo.com/media/organizations/2019/09/06/Catar.svg' },
    ]
  },
  {
    id: "D",
    paises: [
      { name: 'Brasil', bandeira: 'https://s.sde.globo.com/media/organizations/2019/09/06/Catar.svg' },
      { name: 'Sérvia', bandeira: 'https://s.sde.globo.com/media/organizations/2019/09/06/Catar.svg' },
      { name: 'Suiça', bandeira: 'https://s.sde.globo.com/media/organizations/2019/09/06/Catar.svg' },
      { name: 'Camarões', bandeira: 'https://s.sde.globo.com/media/organizations/2019/09/06/Catar.svg' },
    ]
  },
  {
    id: "E",
    paises: [
      { name: 'Brasil', bandeira: 'https://s.sde.globo.com/media/organizations/2019/09/06/Catar.svg' },
      { name: 'Sérvia', bandeira: 'https://s.sde.globo.com/media/organizations/2019/09/06/Catar.svg' },
      { name: 'Suiça', bandeira: 'https://s.sde.globo.com/media/organizations/2019/09/06/Catar.svg' },
      { name: 'Camarões', bandeira: 'https://s.sde.globo.com/media/organizations/2019/09/06/Catar.svg' },
    ]
  },
  {
    id: "F",
    paises: [
      { name: 'Brasil', bandeira: 'https://s.sde.globo.com/media/organizations/2019/09/06/Catar.svg' },
      { name: 'Sérvia', bandeira: 'https://s.sde.globo.com/media/organizations/2019/09/06/Catar.svg' },
      { name: 'Suiça', bandeira: 'https://s.sde.globo.com/media/organizations/2019/09/06/Catar.svg' },
      { name: 'Camarões', bandeira: 'https://s.sde.globo.com/media/organizations/2019/09/06/Catar.svg' },
    ]
  },
  {
    id: "G",
    paises: [
      { name: 'Brasil', bandeira: 'https://s.sde.globo.com/media/organizations/2019/09/06/Catar.svg' },
      { name: 'Sérvia', bandeira: 'https://s.sde.globo.com/media/organizations/2019/09/06/Catar.svg' },
      { name: 'Suiça', bandeira: 'https://s.sde.globo.com/media/organizations/2019/09/06/Catar.svg' },
      { name: 'Camarões', bandeira: 'https://s.sde.globo.com/media/organizations/2019/09/06/Catar.svg' },
    ]
  },
  {
    id: "H",
    paises: [
      { name: 'Brasil', bandeira: 'https://s.sde.globo.com/media/organizations/2019/09/06/Catar.svg' },
      { name: 'Sérvia', bandeira: 'https://s.sde.globo.com/media/organizations/2019/09/06/Catar.svg' },
      { name: 'Suiça', bandeira: 'https://s.sde.globo.com/media/organizations/2019/09/06/Catar.svg' },
      { name: 'Camarões', bandeira: 'https://s.sde.globo.com/media/organizations/2019/09/06/Catar.svg' },
    ]
  },
];

function dados() {

  const body = document.querySelector("body");
  const div = document.createElement("div");
  div.classList.add("containerTabela");

  Grupos.forEach((element, index) => {

    const table = document.createElement("table");
    table.id = "grupo" + (index + 1);
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

function carregaDados() {
  dados();
}

