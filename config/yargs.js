const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar.'
    })
    .option('l',{
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Indica si listan los resultados o no.'
    })
    .option('h',{
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Indica hasta que numero se crea la tabla.'
    })
    .check((argv, options) => {

        if (isNaN(argv.b  && argv.h)) {
            throw 'la base y el hasta tiene que ser un numero'
        }
        return true;
    })
    .argv;

    module.exports = argv;