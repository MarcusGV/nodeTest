const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();
console.log(argv);

crearArchivo(argv.b, argv.l, argv.m)
.then(archivo => console.log(archivo, 'creado'))
.catch(error => console.log('error: ', error));
