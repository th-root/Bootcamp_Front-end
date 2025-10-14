const OFFSET = 0;
const LIMIT = 10;
const URL = `https://pokeapi.co/api/v2/pokemon?offset=${OFFSET}&limit=${LIMIT}`;

function createPokemonCardHtml(pokemon) {
    return `
        <li class="pokemon">
            <span class="number">#001</span>
            <span class="name">${pokemon.name}</span> 

            <div class="details">
                <ol class="types">
                    <li class="type">Grass</li>
                    <li class="type">Poison</li>
                </ol>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}">
            </div>
        </li>
    `;
};

const POKEMONLIST = document.getElementById('pokemonsList');

POKEAPI.getPokemons(OFFSET, LIMIT).then((pokemons) => {

    const listItems = [];

    listItems.push(...pokemons.map(createPokemonCardHtml));

    POKEMONLIST.innerHTML += listItems.join('');
    
    // pokemons.map(pokemon => {
    //     return createPokemonCardHtml(pokemon);
    // });
         
    // POKEMONLIST.innerHTML += pokemons.map(createPokemonCardHtml).join('');
});