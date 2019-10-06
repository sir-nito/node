const fs = require('fs');
let resultado = '';
let listar = async(base, limite) => {
    return new Promise((resolve, reject) => {
        console.log(`la base es ${base} y el limite ${limite}: `);
        if (!Number(base) && !Number(limite)) {
            reject('estos no son numeros por favor ingrese');
            return;
        }
        for (let a = 0; a <= limite; a++) {
            resolve(console.log(`${base} * ${a} = ${base * a}\n`));
        }
    });

}
let crearArchivo = async(base, limite) => {

    return new Promise((reject, resolve) => {
        if (!Number(base) && !Number(limite)) {
            reject('no es un numero');
            return;
        }
        for (let i = 0; i <= limite; i++) {

            resultado += `${base} * ${i} = ${base * i}\n`;
        }
        fs.writeFile(`./tabla/tabla-${base}.txt`, resultado, (err) => {
            if (err) reject(err);
            else {
                resolve(`tabla-${base}.txt ha sido creada`);
            }

        });
    })

}








module.exports = {
    crearArchivo,
    listar
}