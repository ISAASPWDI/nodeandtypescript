//Patrón adaptador para el plugin get-age
const getAgePlugin = require('get-age');

const getAge = (birthdate) => {
    if (!birthdate) return new Error('Birthdate is required'); 
    return getAgePlugin(birthdate);
}

module.exports = {
    getAge,
}