const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        demand: true,
        alias: 'l',
        default: 40
    }
}
const argv = require('yargs').
command('crear', 'crear el archivo de txt con una tabla', opts).
command('listar', 'Imprime en consola la tabla de multiplicar', opts).help()
    .argv;

module.exports = {
    argv
}