// const argv = require('yargs')
//     .options({
//         'b': {
//             'alias': 'base',
//             'type': 'number',
//             'describe': 'Indica el número a multiplicar',
//             'demandOption': true
//         }
//     }, {
//         'l': {
//             'alias': 'listar',
//             'type': 'boolean',
//             'describe': 'Indica si se lista la tabla o no',
//             'default': false
//         }
//     })
//     .check((argv, options) => {
//         if (isNaN(argv.b)) {
//             throw 'La base debe ser un número'
//         }
//         return true
//     })
//     .argv;


const argv = require('yargs')
    .option(
        'b', {
            'alias': 'base',
            'type': 'number',
            'describe': 'Indica el número a multiplicar',
            'demandOption': true
        }
    )
    .option(
        'l', {
            'alias': 'listar',
            'type': 'boolean',
            'describe': 'Indica si la tabla se lista o no',
            'default': false
        }
    ) 
    .option(
        'h', {
            'alias': 'hasta',
            'type': 'number',
            'describe': 'Indica el número final por el que se debe multiplicar',
            'default': 12
        }
    )        
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base debe ser un número'
        }
        return true
    })
    .argv;



module.exports = argv;