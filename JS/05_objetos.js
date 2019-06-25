//Si estamos en Java, C##, PHP...
//Los objetos dependen de clases
//class Persona {}
//p1 = new Persona ()
//p2 = new Persona ()

//En JS tenemos objetos literales
//basados en la notacion JSON
let p1 = {
    nombre: 'pepe',
    edad: 33,
    direccion: {
        calle: 'c/Pez',
        numero: '4',
        ciudad: 'Madrid',
        pais: 'España',
    },
    aficiones : ['pintar','musica'],
    isAlumno: true
}
let p2 = {
    nombre: 'rosa',
    edad: 35,
    isAlumno: true
}

p1.altura = 179
p2.colorPelo = "rubio"

console.log(p1)
console.log(p2)

console.log(p1.nombre)
console.log(p1.direccion.ciudad)
console.log(p1.aficiones [0])

let prop = 'profesion'
p2[prop] = 'escritora'
console.log(p2 [prop])

for (const key in p2) {
        const element = object[key];
        console.log('La propiedad ${key} vale ${value}')
}

for (const key in p2) {
        const value = p2[key];
        console.log('La propiedad ${key} vale ${value}')  
}