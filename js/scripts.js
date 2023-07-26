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

    function addv(pokemon) {
        if(typeof pokemon === "object") 
        {
            let refArray = ["name","height","types"];
            let allowPush = true;
            for(let i = 0; i < refArray.length; i++)
            {
                if(Object.keys(pokemon)[i] != refArray[i])
                {
                    allowPush = false;
                }
            }

            if(allowPush)
            {
                pokemonList.push(pokemon);
            }
            else
            {
                console.log('Entry was not a valid pokemon');
            }
            
        }
        else
        {   
            console.log('Entry was not an object');
        }
    }

    function searchName(pokeName) {
        return pokemonList.filter(pokemon => pokemon.name === pokeName);
    }

    function getAll()
    {
        return pokemonList;
    }

    return {
        add: add,
        addv : addv,
        searchName: searchName,
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
