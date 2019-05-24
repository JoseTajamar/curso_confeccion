"use strict"

//varible de ambito (scope) Global
var antes = 2
let a = 2
let b = 4

function prueba () {
    //variable de ambito local a la funcion
    var int = 3
    let i = 6
    let b = 9

    if (true) {
        //variable ambito local al bloque if
        let z = 4
        let w = 7
        console.log("Es verdad")
        console.log("desde el if ", a) //2
        console.log("desde el if ", b) //9 
        console.log("desde el if ", w) //7
        
    }

    console.log("Desde la función", a) //2
    console.log("Desde la función", b) //9
    //console.log("Desde la función", w) //Error
    //console.log("Desde la funcion", z) //4
}

prueba()

// c =3 -> esto daria un error debido al use strict

console.log("Desde el programa", a) //2
console.log("Desde el programa", b) //4

let v = 45

function ejemplo () {
    //let v = 3
    console.log(v)
}

function sample () {
    //console.log(v)
}

ejemplo()
sample()