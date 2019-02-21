const argv = require('./config/yargs').argv;
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');


let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => { console.log(`Archivo creado ${archivo}`); })
            .catch(err => console.log(err));
        break;
    default:

        break;
}

//proccess es una variable al igual que module que esta de manera global y que tiene informacion de el equipo actual
// console.log(process.argv);

// let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];


// console.log(argv.base);
// console.log('limte', argv.limite);
// console.log(argv2);