function convertPokemonTypeToHtml(pokemonTypes) {
    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}

function createPokemonCardHtml(pokemon) {
    return `
        <li class="pokemon">
            <span class="number">#${String(pokemon.order).padStart(3, '0')}</span>
            <span class="name">${pokemon.name}</span> 

            <div class="details">
                <ol class="types">
                    ${convertPokemonTypeToHtml(pokemon.types).join('')}
                </ol>
                <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">
            </div>
        </li>
    `;
};

const POKEMONLIST = document.getElementById('pokemonsList');

POKEAPI.getPokemons().then((pokemons = []) => {
    const NEWLIST = pokemons.map(createPokemonCardHtml).join('');
    POKEMONLIST.innerHTML = NEWLIST;
});