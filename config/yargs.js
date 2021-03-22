const argv = require('yargs')
        .option('b',{
            alias: 'base',
            type: 'number',
            demandOption:true,
            describe:'Toma la base'
        })
        .option('l',{
            alias: 'list',
            type:'boolean',
            demandOption: false,
            default: false,
            describe:'Lista la tabla'
        })
        .option('m',{
            alias: 'limit',
            type:'number',
            default: 10,
            describe:'Numero mas alto a multiplicar'
        })
        .check((argv, options) =>{
            if (isNaN( argv.b)){
                throw 'La base debe ser un numero'
            }
            return true;
        })
        .argv;
module.exports=argv;