let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

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
            loadDetails(pokemon).then(function () {
                showModal(pokemon.imageUrl, pokemon.name, 'Height: ' + pokemon.height);
            });
        });
        listItem.appendChild(button);
        pokeUL.appendChild(listItem);
    }

    function searchName(pokeName) {
        return pokemonList.filter(pokemon => pokemon.name === pokeName);
    }

    function getAll() {
        return pokemonList;
    }

    function loadList() {
        // fetches information from the url we set above, then returns a parsed json object
        return fetch(apiUrl).then(function (response) {
            return response.json();
        }).then(function (json) { // the parsed json is then fed into a chained promise that adds a new pokemon object for each object found in the json
            json.results.forEach(function (item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
            });
        }).catch(function (e) {
            console.error(e);
        })
    }
    
    // item, in this case, is a pokemon, which this function receives from the buttons we hooked up in a previous exercise that call showDetails
    function loadDetails(item) {
        // detailsUrl comes from the pokemon object returned by the API 
        let url = item.detailsUrl; 
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.types = details.types;
        }).catch(function (e) {
            console.error(e);
        });
    }

    return {
        add: add,
        addv : addv,
        addListItem: addListItem,
        searchName: searchName,
        loadList: loadList,
        loadDetails: loadDetails,
        getAll: getAll
    };
})();

pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function(pokemon){
        pokemonRepository.addListItem(pokemon);
    });
});

function showModal(spriteUrl, title, text) {
    let modalContainer = document.querySelector('#modal-container');
  
    modalContainer.innerText = '';
    
    let modal = document.createElement('div');
    modal.classList.add('modal');
  
    let spriteElement = document.createElement('img');
    spriteElement.src = spriteUrl;

    let titleElement = document.createElement('h1');
    titleElement.innerText = title;
  
    let contentElement = document.createElement('p');
    contentElement.innerText = text;
  
    let closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'Close';
    closeButtonElement.addEventListener('click', hideModal)

    modal.appendChild(spriteElement);
    modal.appendChild(titleElement);
    modal.appendChild(contentElement);
    modal.appendChild(closeButtonElement);
    modalContainer.appendChild(modal);
  
    modalContainer.classList.add('is-visible');
    modalContainer.addEventListener('click', (e) => {
      let target = e.target;
      if (target === modalContainer) {
        hideModal();
      }
    });
  }
  
  function hideModal() {
    let modalContainer = document.querySelector('#modal-container');
    modalContainer.classList.remove('is-visible');
  }
  
  window.addEventListener('keydown', (e) => {
    let modalContainer = document.querySelector('#modal-container');
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();
    }
  })
