/**
 * @description: funcion a la que le paso un string y el me devuelve true si lo es o false si no lo es
 * @param {string}
 * @returns {boolean}
 */

isPali = (cadena = '') => {
    let r = false
    cadenaSinEspacios = cadena.split(' ').join('').toLowerCase()
    console.log(cadenaSinEspacios)
    cadenaInversa = cadenaSinEspacios.split('').reverse().join('')
    console.log(cadenaInversa)
    if (cadenaSinEspacios === cadenaInversa) {
        r = true
    }
    return r
}

isPaliShort = (cadena = '') => {
    sinEspacios = cadena.split(' ').join('').toLowerCase()
    return sinEspacios === 
        sinEspacios.split('').reverse().join('') ? true : false 
}

module.exports = {}
module.exports.isPali = isPali
module.exports.isPaliShort = isPaliShort


