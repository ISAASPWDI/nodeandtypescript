interface BuildPersonOptions {
    getAge: (birthdate: string) => number;
    getId: () => string;
}
interface PersonOptions {
    name: string;
    birthdate: string;
}

export const buildPerson = ({ getAge, getId }: BuildPersonOptions) => {
    return ({ name, birthdate }: PersonOptions ) => {
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