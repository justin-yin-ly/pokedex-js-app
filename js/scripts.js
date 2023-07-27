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

    function addListItem(pokemon) {
        let pokeUL = document.querySelector('.pokemon-list');
        let listItem = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('poke-button');
        button.addEventListener('click', function() {
            showDetails(pokemon);
        });
        listItem.appendChild(button);
        pokeUL.appendChild(listItem);
    }

    function showDetails(pokemon) {
        console.log(pokemon);
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
        addListItem: addListItem,
        showDetails: showDetails,
        searchName: searchName,
        getAll: getAll
    };
})();


function displayPokeArray (list)
{
    list.forEach(function(pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
}

displayPokeArray(pokemonRepository.getAll());
