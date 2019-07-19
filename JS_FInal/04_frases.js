/*Crear un programa capaz de analizar una frase:

número de palabras
longitud media de las palabras
veces cada letra
frecuencia cada letra
Incorporar un interface Web de entrada y salida*/

function numPalabras(frase = '') {
    return frase.split(' ').length 
}
function logMedia(frase) {
    let array = frase.split(' ')
    return frase.split(' ').join(' ').length / frase.split(' ').length
/*     let i = 0
    array.forEach(item => {
        i += item.length
    });
    return i / array.length */
}
const cadena = 'Hola amigos como estais'
console.log(numeroPalabras(cadena))
console.log(logMedia(cadena))

function vecesCadaLetra(frase){
    const LETRAS = {
        ABCDEFGHIJKLMNOPQRSTIUVWXYZ
    }
}