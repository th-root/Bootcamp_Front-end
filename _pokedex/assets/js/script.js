const POKEMONLIST = document.getElementById('pokemonsList');
const LOADMOREBUTTON = document.getElementById('loadMoreButton');
const limit = 4;
const maxRecords = 24;
let offset = 0;

function loadPokemons(offset, limit) {

    POKEAPI.getPokemons(offset, limit).then((pokemons = []) => {
        const NEWLIST = pokemons.map((pokemon) => `
            <li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span> 

                <div class="details">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>
            </li>
        `).join('');
        POKEMONLIST.innerHTML += NEWLIST;
    });
}

loadPokemons(offset, limit);

LOADMOREBUTTON.addEventListener('click', () => {

    offset += limit;
    
    const recordsNextPage = offset + limit;

    if (recordsNextPage >= maxRecords) {
        let newLimit = maxRecords - offset;
        loadPokemons(offset, newLimit);
        LOADMOREBUTTON.parentElement.removeChild(LOADMOREBUTTON);
    } else {
        loadPokemons(offset, limit);        
    }
});
