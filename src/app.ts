
// const info = require('./js/js-foundation/02-destructuring');

// const email = require('./js/js-foundation/01-template');
import { buildLogger } from './plugins/logger.plugin'; //getAge, getId, 
// const { getUserById } = require('./js/js-foundation/03-callbacks');
import { getPokemonById } from './js/js-foundation/05-promises';
console.log(getPokemonById('10').then(data => console.log(data)));
const logger = buildLogger('app.js').error('Ocurrio un error');


// const { buildPerson } = require('./js/js-foundation/04-factory-functions');
// console.log(email.emailTemplate);
// console.log(info);

// getUserById(3, (error, user) => {
//     if (error) throw new Error(error);

//     console.log('User found', user);

// });

// ! Referencia a la factory function
// const obj = { name: 'John', birthdate: '2004-03-17' };
// const makePerson = buildPerson({ getAge, getId });
// console.log({person1: makePerson(obj)});



console.log("Hello, world!");