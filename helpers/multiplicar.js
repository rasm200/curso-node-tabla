const fs = require('fs');
const colors = require('colors');

const crearArchivo = async ( base = 5, listar = false , hasta = 10 ) => {
    try {
        let salida  = '';
        let consola = '';

        for (let i = 1; i <= hasta ; i++) {
            salida += ( `  ${ colors.magenta( base ) } ${ 'x'.green } ${ i } ${ '='.green } ${ colors.yellow( base * i )} \n`);
            consola += ( `  ${ base  } x ${ i } = ${ base * i } \n`); 
        }
        
        if( listar ){
            console.log('----------*******-----------'.magenta);
            console.log('        TABLA DEL'.green, colors.blue(base));
            console.log('----------*******-----------'.green);
            console.log( salida );
            console.log('=============================');
        }
        /** Método síncrono */
        fs.writeFileSync(`./salida/tabla-${base}.txt`, consola);

        return (`tabla-${base}.txt Creado`);

    } catch (err) {
        throw err;
    }
}

module.exports = {
    crearArchivo
}