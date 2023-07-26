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


function displayPokeArray (list)
{
    for(let i = 0; i < list.length; i++)
    {
        let pokeInfo = list[i].name + '(height: ' + list[i].height + ')';
        if(list[i].height > 1)
        {
            pokeInfo += ' - Wow, that\'s big!';
        }
        pokeInfo += '<br><br>'
        document.write(pokeInfo);
    }
}

displayPokeArray(pokemonList);
