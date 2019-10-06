let { crearArchivo, listar } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
let comando = argv._[0];

switch (comando) {
    case 'listar':
        listar(argv.base, argv.limite)
            .then(resp => console.log(`la respuesta es : finalizado`))
            .catch(err => console.log(err));
        break;

    case 'crear':
        console.log('se ha creado lo que querias crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`la espuesta es: ${archivo}`))
            .catch(err => console.log(err));
        break;

    default:
        console.log('comando no reconocido ');

}