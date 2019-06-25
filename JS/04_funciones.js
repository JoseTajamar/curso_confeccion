
/** 
 * 
 * 
 * @param {array} aDatos 
 * @returns {array}
 */

function calcularSC(...aDatos) {
    let r = 0
    let aCuadrados = []
    for (let i = 0; i < aDatos.length; i++) {
        const item = aDatos[i];
        let x = item * item
        aCuadrados.push(x)
        r +=x
    }    
    return [r, aCuadrados]  
}

let sumaTotal
let aCuadrados
let aResultados
sumaTotal = aResultados [0]
aCuadrados = aResultados [1]

[sumaTotal, aCuadrados] = calcularSC(1, 5, 7, 8)
console.log(sumaTotal)
console.log(aCuadrados)