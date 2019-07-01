'use strict'
/**
 * @description: comprobar si la cadena tiene:
 * solo mayusculas
 * solo minusculas
 * mayusculas y minusculas
 * @param  {string}cadena
 * @returns
 */
function comprobarCaso (cadena = '') {
    let r = 2
    if (cadena == cadena.toUpperCase() ) {  //eres solo mayusculas
        r = 0
    } else if (cadena ==cadena.toLocaleLowerCase()){ //eres solo minusculas
        r = 1
    }
    return r
}

function mostrarComprobacionCaso (cadena = '') {
    const msg = [
        'solo mayusculas',
        'solo minusculas',
        'mayusculas y minusculas'
    ]
    console.log (msg)
}

module.exports = {}
module.exports.comprobarCaso = comprobarCaso
module.exports.mostrarComprobacionCaso = mostrarComprobacionCaso

