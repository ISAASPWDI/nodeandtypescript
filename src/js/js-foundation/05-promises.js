const { http } = require('../../plugins');

//Promesas
const getPokemonById =  async (id) => {   
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res =  await http.get(url);
    return res;
}

module.exports = {
    getPokemonById,
}