/** 
 * @description recorre un objeto a tantos niveles como contenga
 *              y crea un string con la informacion
 * @param {object} obj
 * @returns {string}
 * 
 */

 function objectToString(obj = {}) {
    let cadena = ''
    for (const key in obj) {
        if (object.hasOwnProperty(key)) {
            const element = object[key];
            cadena +='${key}: ${value}'
        }
    }
    return cadena

 }
 let p1 = {
    nombre: 'pepe',
    edad: 33,
    direccion: {
        calle: 'c/Pez',
        numero: '4',
        ciudad: 'Madrid',
        pais: 'España',
    },
    aficiones : ['pintar','musica'],
    isAlumno: true
}
let p2 = {
    nombre: 'rosa',
    edad: 35,
    isAlumno: true
}