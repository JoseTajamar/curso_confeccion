/**
 * @description: funcion que calcula la media de n numeros independientes
 * @param {...[]number} aDatos
 * @returns {number}
 */

function media(...aDatos){
    let r= 0
    return r
}
media(2,4,7,2,4,4)
media(2,4,7,2,4,4,7,4,3)

function mediaArray(...aDatos){
    let r= 0
    return r
}
mediaArray(2,4,7,2,4,4,7,4,3)


media(2,4,7,2,4,4)
media(2,4,7,2,4,4,7,4,3)



function mediaArray(aDatos = []) {
    let r= 0
    for (let i = 0; i < aDatos.length; i++) {
        const item = aDatos[i];
        r += item
    }
    return r /aDatos.length
}

console.log(mediaArray([2,4,7,2,4,4]))


function mediaTotal(...aDatos){
    let r = 0
    for (let i = 0; i < aDatos.length; i++) {
        const item = aDatos[i];
        if (Array.isArray(item)) {
            
        }
        
    }
    return r
}
