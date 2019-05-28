
"use strict"

//Operaciones con Numbers
let x = 2
let y = 3
let z = x * y

//Operaciones con numbers y string
y = "3"
z = x * y //Durante la numeracion Number (Y)
x = "5"
z = x * y


console.log(z, typeof z) //6//Number
console.log(x, typeof x) //string
console.log(y, typeof y) //string

/* sobrecarga del simbolo +
+3
2+2 
"hola" + "pepe" */

let w = x + y //No da 8, da "53"
console.log(w, typeof w)

x = 23
y = "20"
w = x + y //da 2320
w = w * 1
console.log(w, typeof w)

/**
 * NOT !
 * OR ||
 * and &&
 */


function sumar (a, b) {
    if (typeof a != "number" || typeof b != "number") {
        return "No se puede sumar"
    }
    let r = a + b
    return a + b
}

console.log(sumar (2, 2))
console.log(sumar (2, 0))
console.log(sumar (2, "5"))
