const pokemonListContainer = document.getElementById('pokemon-list');

const URL = ` https://pokeapi.co/api/v2/pokemon/`;


fetch(URL).then((response) => response.json()).then((data) => {
  console.log(data.results)
  data.results.forEach((pokemon) => {
    console.log(pokemon);
  const li = document.createElement('li');
  const textNode = document.createTextNode(pokemon.name);
      li.appendChild(textNode); 
      pokemonListContainer.appendChild(li)  
  })  
  
 

})
