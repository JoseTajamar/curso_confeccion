
//Objeto JSON o literal

const p1 = {
    nombre: 'Pepe',
    edad: 23,
    altura: 178,
    pais:'España'
}

function Persona(nombre, edad, altura, pais){
    this.cerebro = true
    this.nombre = nombre
    this.edad = edad
    this.altura = pais
    
    this.saludar = function (otro = 'amig@') {
        let msg = `Hola ${otro}, soy ${this.nombre}`
        console.log(msg)
    }
}


const p2 = new Persona('Pepe', 23, 180, 'Bulgaria')
const p3 = new Persona('Pepa', 27, 170, 'Italia')
/* delete p2.cerebro
p2.is = true */

p2.profesion = 'medico'
p3.profesion = 'CEO'

console.log(p1)
console.log(p2)
console.log(p3)

p2.saludar(p3.nombre)
p3.saludar(p2.nombre)