const argv = require('yargs')
    .command('listar', 'imprimer en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;

const { crearArchivo } = require('./multiplicar/multiplicar');

//proccess es una variable al igual que module que esta de manera global y que tiene informacion de el equipo actual
// console.log(process.argv);

let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];


console.log(argv.base);
console.log('limte', argv.limite);
// console.log(argv2);

// crearArchivo(base)
//     .then(archivo => { console.log(`Archivo creado ${archivo}`); })
//     .catch(err => console.log(err));