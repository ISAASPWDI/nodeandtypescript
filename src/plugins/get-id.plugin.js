//Patrón adaptador para el plugin UUID
const  {v4: UUID} = require('uuid');

const getId = () => {
    if (!UUID())  throw new Error('Error generating ID');
    return UUID();
}
module.exports = {
    getId,
}