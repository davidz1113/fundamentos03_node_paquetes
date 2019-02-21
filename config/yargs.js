const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'imprimer en consola la tabla de multiplicar', opts)
    .command('crear', 'Crea la tabla de multiplicar', opts)
    .help()
    .argv;


module.exports = {
    argv
}