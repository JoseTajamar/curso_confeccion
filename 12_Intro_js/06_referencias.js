"use strict"


//valores primitivos
// (number, string, boolean)



let a = 2
let b = a // asignacion de valor
console.log("A crear b", a, b)
b = b * b
a = a / 2
console.log( "valor de b", b) // 4
console.log("valor de a", a) // 1

b = a
console.log("valor de b", b)


//valores referenciados
let p1 = {nombre: "Pepe", edad: 34}
let p2 = p1
p1.nombre = "Juan"
console.log(p1) //
console.log(p2)


/* let a1 = {nombre: "Raquel", edad: 24} */

function inscribirEnJS() {
    a1.curso = "JS"
}

let a1 = {nombre: "Raquel", edad: 24}
let a2 = {nombre: "Maria", edad: 29}
let a3 = {nombre: "Miguel", edad: 19}

function inscribirEnJS(alumno) {
    if (alumno) {
        alumno.curso = "JS"
    }
}    
inscribirEnJS(a1)
inscribirEnJS(a2)
inscribirEnJS(a3)

console.log(a1)
console.log(a2)
console.log(a3)

let saldo = 1000



function invertir(x){
    x = x * 2
    return x
}
saldo = invertir(saldo)
console.log(saldo)