/**
 * @description: eliminar de un array los nombres que
 * empiecen por una tecla determinada del Array que recibe
 * @param {string}: letra
 * @param {array}: aNombres
 * @returns {array}
 */

 function limpiarArrays (letra = '', aNombres = []) {
     const r = aNombres.slice()
     for (let i = 0; i < aNombres.length; i++) {
         const item = aNombres[i];
         if (item[0].toLowerCase() == letra.toLowerCase()) {
             aNombres.splice(i, 1)
             i--
         }
     }
     return r
 }

 let l = 'r'
 let aUsuarios = ['rosa',  'elena','raquel', 'maria']

 limpiarArrays(l, aUsuarios)
 console.log(aUsuarios)

 //PARAMETROS Y ELEMENTALEs

 function algo(h) {
     h = h * h
     return h
 } 
 let z = 4
 algo(z)
 console.log(z)

//PARAMETROS Y REFERENCIAS

function cuadrados(a) {i
    for (let i = 0; i < a.length; i++) {
        a[i] = a[i] * a[i]
    }
    return a // [1, 4, 9]
}

let x = [1, 2, 3]
cuadrados(x)
console.log(x)