console.log("Hola Amigos del Curso")

//DATOS//

//Tipos primitivos//

undefined // Tipo undefined
20 // Tipo number
"Alejandro" // Tipo string
true // Tipo boolean

//Tipos complejos o referenciales//

//(nombre: "pepe", edad: 27) Tipo objeto

//Los lenguajes pueden ser:
//Tipado fuerte o debil  
//Tipado estatico o fuedinamicorte



/* //En Java el tipado es fuerte y estatico
a: int // Tipo int, sin valor
a = 3
a = "Pepe" // Error de tipos */

//JS es de tipo debil y dinamico


let a
console.log(a)
console.log(typeof a) // unfefined
a = 2
console.log(a)
console.log(typeof a) // number
a = 25
console.log(a)
console.log(typeof a) 
a = "Pepe"
console.log(a)
console.log(typeof a)
a = "false"
console.log(a)
console.log(typeof a)
a = [1, 2, 3]
console.log(a)
console.log(typeof a)
a = [
    {nombre: "Pepe", edad: 27},
    {nombre: "Jorge", edad: 18},
    {nombre: "paco", edad: 40}
]
console.log(a)
console.log(typeof a)

//Uso normal de datos y variables