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

for(let i = 0; i < 3; i++)
{
    let pokeInfo = pokemonList[i].name + '(height: ' + pokemonList[i].height + ')';
    if(pokemonList[i].height > 1)
    {
        pokeInfo += ' - Wow, that\'s big!';
    }
    pokeInfo += '<br><br>'
    document.write(pokeInfo);
}