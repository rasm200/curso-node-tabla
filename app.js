const {
    crearArchivo
} = require('./helpers/multiplicar')

const argv = require('./config/yargs')


// const argv = require('yargs')
//     .option('b', {
//         'alias': 'base',
//         'type': 'number',
//         'describe': 'Indica el número a multiplicar',
//         'demandOption': true
//     })
//     .check((argv, options) => {
//         if (isNaN(argv.b)) {
//             throw 'La base debe ser un número'
//         }
//         return true
//     })
//     .argv;




// .check((argv, options) => {
//     if (isNaN(argv.b)) {
//         throw 'La base debe ser un número'
//     }
//     return true
// })
//.argv;


console.clear();

// console.log('Proceso sin yargs'.green,  process.argv );
// console.log('Proceso con Yargs'.yellow, argv );


// if( argv.base ){
// console.log('Valor del argumento'.bgGreen, argv.base);
// }


// //console.log(process.argv);

// const [ , , arg3 = 'base=5'] = process.argv;
// const [,base=5] = arg3.split('=');
// const base = argv.b;
// const listar = argv.l;

crearArchivo( argv.b, argv.l, argv.h )
    .then(() => {
        console.log('Finalizado');
    })
    .catch((err) => {
        console.log(err);
    })

// console.log('hello'.green);
// console.log('Rainbow'.rainbow);
// console.log(colors.green('hello')); // outputs green text
// console.log(colors.red.underline('i like cake and pies')) // outputs red underlined text
// console.log(colors.inverse('inverse the color')); // inverses the color
// console.log(colors.rainbow('OMG Rainbows!')); // rainbow
// console.log(colors.trap('Run the trap')); // Drops the bass