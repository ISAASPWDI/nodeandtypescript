
const buildPerson = ({ getAge, getId }) => {
    return ({ name, birthdate }) => {
        return {
            id: getId(),
            name,
            birthdate,
            age: getAge(birthdate)
        }
    }
}
// const person = makePerson(obj);
// console.log(person);

module.exports = {
    buildPerson,
}