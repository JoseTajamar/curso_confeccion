/* new objects()
let x = {}
new Array()
let a = []
new String()
let c = 'pepe' */

let x = {} //new object ()
let a = [] //new Array()
let c = 'pepe'
c.toUpperCase() //implicitamente new String (c)
let n = 223
n.toFixed(2) //implictamente New number (n)
function algo() {} //new Function ()

//Otros objectos

const d = new Date()
const e = new Error()
const r = new RegExp()
const r1 = /* / / */

//Objetos no instanciables

Math.random()
Math.PI
//JSON.stringify()
//JSON.parse()

const fecha = new Date()
const america = new Date(1492, 6, 4)
const zx = new Date('1972-12-22')



console.log (fecha.valueOf())
console.log(america.valueOf())
console.log(zx.valueOf())


//Mostrar fechas
console.log(fecha)
console.log(fecha.toString())
console.log(fecha.toUTCString())
console.log(fecha.toJSON())
console.log(fecha.toLocaleString())
console.log(fecha.toLocaleDateString())

//Operaciones con Fechas

//Get | getters

console.log(fecha.getTime())
console.log(fecha.getTimezoneOffset())
console.log(fecha)
console.log(fecha.getMonth())
console.log(fecha.getDay())
