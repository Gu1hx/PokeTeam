const API = "https://pokeapi.co/api/v2/pokemon/"
let box = document.getElementById("cardboxers")

function getRandomArbitrary(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}

async function Get(url) {
    const response = await fetch(url)
    const dados = await response.json()
    return dados
}
async function pokeGet() {
    let array = []
    box.innerHTML= ''
    for (let i = 0; i < 6; i++) {
        let numero = getRandomArbitrary(1, 151)
        let pokemon = await Get(API + numero)
        array.push(pokemon)
    }
    array.forEach(element => {
        box.innerHTML += `                <div class="col">
                    <div id="card1" class="card h-100">
                        <img src="${element.sprites.other["official-artwork"].front_default}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${element.name}</h5>
                        </div>
                    </div>
                </div>
                `
    });

}

let butao = document.getElementById("botao")

butao.addEventListener('click', pokeGet)