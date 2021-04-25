const fs = require('fs');


const crearArchivo = async (base = 1, listar,hasta) => {

    try {
        let salida = '';


        for (let index = 1; index <= hasta; index++) {
            salida += `${base} x ${index} = ${base * index}\n`;
        }

        if (listar === true) {

            console.clear();
            console.log('=====================');
            console.log('   tabla del:', base);
            console.log('=====================');
            console.log(salida);
        }


        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;
    } catch (err) {
        throw err;
    }

};

module.exports = {
    crearArchivo
}