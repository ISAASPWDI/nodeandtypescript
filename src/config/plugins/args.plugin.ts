import yargs, { options } from 'yargs';
import { hideBin } from 'yargs/helpers';


export const yarg = yargs(hideBin(process.argv) )
  .option('b', {
    alias: 'base', //nombre
    type: 'number', //tipo 
    demandOption: true, //obligatorio
    describe: 'Multiplication table base' //descripcion
  })
  .option('l', {
    alias: 'limit',
    type: 'number',
    default: 10,
    describe: 'Multiplication table limit'
  })
  .option('s', {
    alias: 'show',
    type: 'boolean',
    default: false,
    describe: 'Show multiplication table'
  })
  .option('n',{
    alias: 'name',
    type: 'string',
    default: 'multiplication-table',
    describe: 'File name'
  })
  .option('d', {
    alias: 'destination',
    type: 'string',
    default: 'outputs',
    describe: 'File destination'
  })
  .check(( argv, options ) => {
    if ( argv.b < 1 ) throw 'Error: base must be a positive number';
    if ( argv.l > 20 ) throw 'Error: limit must be a number between 1 and 20';
    return true;
  })
  .parseSync()




