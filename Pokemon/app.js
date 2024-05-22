document.getElementById('search-button').addEventListener('click', () => {
    const search = document.getElementById('search').value;
    const pokemonContainer = document.getElementById('pokemon');

    pokemonContainer.innerHTML = '';

    fetch(`https://pokeapi.co/api/v2/pokemon/${search}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('No se encontró el Pokémon.');
            }
            return response.json();
        })
        .then(data => {
            const pokemonInfo = `
                <h2>${data.name}</h2>
                <img src="${data.sprites.front_default}" alt="${data.name}">
                <p>Altura: ${data.height}</p>
                <p>Peso: ${data.weight}</p>
            `;
            pokemonContainer.innerHTML = pokemonInfo;
        })
        .catch(error => {
            const errorMessage = `
                <p>Error: ${error.message}</p>
            `;
            pokemonContainer.innerHTML = errorMessage;
        });
});

document.getElementById('clear-button').addEventListener('click', () => {
    document.getElementById('pokemon').innerHTML = '';
});
