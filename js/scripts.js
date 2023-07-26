let pokemonRepository = (function () {
    let pokemonList = [
        {
            name: 'Bulbasaur',
            height: 0.7,
            types: ['grass','poison']
        },

        {
            name: 'Charmander',
            height: 1.6,
            types: ['fire']
        },

        {
            name: 'Squirtle',
            height: 0.5,
            types: ['water']
        }
    ];

    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    function getAll()
    {
        return pokemonList;
    }

    return {
        add: add,
        getAll: getAll
    };
})();


function displayPokeArray (list)
{
    list.forEach(function(pokemon) {
        document.write(
            pokemon.name + ' (height: ' + pokemon.height + ')' + 
            (pokemon.height > 1 ? ' - Wow, that\'s big!': '') + '<br><br>'
            );
    });
}

displayPokeArray(pokemonRepository.getAll());
