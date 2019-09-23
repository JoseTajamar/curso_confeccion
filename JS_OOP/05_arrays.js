let ob = {} //new Object
let aDatos = [2, 8, 9, 76, 'Pepe'] //new Array ()
aDatos[aDatos.length] = [87, 90]
aDatos[aDatos.length] = 56.


aDatos [100] = 9
//console.log(aDatos[78])

/**Funcion randomArray
 * @description: función que devuelve un array de n numeros aleatorios enteros y positivos menores o iguales a 100
 * @params {number} n
 * @return {array}
 */

function randomArray(n = 0) {
    const r = []
    for (let i = 0; i < n; i++) {
        r [i] =  parseInt(Math.random() * 100)
    }
    return r
}
//console.log(String(randomArray(65)))

/**Funcion letraDNI
 * @description: calcular letra DNI
 * @param {number | string} dni
 * @return {string}
 */

 function letraDNI(dni){
     const aLetras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T']
     let r =''
     r = aLetras[dni%23]
     return r
 }
 //console.log(letraDNI(53447668))



 /**Funcion formatoDNI
 * @description: dar formato numero al DNI
 * @param {number | string} dni
 * @return {number}
 */

function formatoDNI(dni){
    if (typeof dni == 'number') {
        return dni
    }
    let r = 0
    let cadenaDNI = ''
    for (let i = 0; i < dni.length; i++) {
        const caracter = dni[i];
            if(isNaN(caracter)) {
                cadenaDNI += caracter
        }
    }
    return r
}

/**Funcion letraDNI
 * @description: calcular letra DNI
 * @param {number | string} dni
 * @return {string}
 */

function letraDNI(dni){
    const aLetras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T']
    return aLetras[formatoDNI(dni)%23]
}

console.log(letraDNI(53447668))
console.log(letraDNI('50.821.728'))
console.log(letraDNI('50-82-17 28'))
console.log(letraDNI('00021728'))