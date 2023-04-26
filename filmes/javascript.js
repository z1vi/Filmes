const apikey = '8a775c59';
const frmPesquisa = document.querySelector("form");

frmPesquisa.onsubmit = (ev) => {
    ev.preventDefault();

    const pesquisa = ev.target.pesquisa.value;

    if (pesquisa == "") {
        alert("Preencha o campo");
        return;
    }

    fetch(`https://www.omdbapi.com/?s=${pesquisa}apikey=${apikey}`)
        .then(result => result.json)
        .then(json => console.log (json));
}

const carregaList = (json) => {
    const lista = document.querySelector("div.lista");
    lista.innerHTML = "";

    json.Search.forEach(element => {
        console.log(element);

        let item = document.createElement("div");
        item.classList.add("item");

        item.innerHTML = `<img src ="${element.Poster}" /><h2>${element.Title} </h2>`

        lista.appendChild(item);
    });
}