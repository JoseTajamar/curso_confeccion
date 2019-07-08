// 4 formas de ejecutar una funcion
// patrones de invocacion
// cambian el significado de "this"
function algo () {
    console.log(this)

}

// Funcion

algo() // this es process () o window

// Metodo

const o = {nombre: 'pepe', edad: 23}
o.algo = algo

o.algo()

// Constructora

const nuevo = new algo ()

// Indirectamente (apply o call)

const otro = {
    tipo: 'perro',
    nombre: 'Rufo'
}

// algo.call()
algo.apply(otro)

console.log('----------------------')

// EN las funciones arrow this es consistente:
//SIEMPRE es la propia funcion

const persona = {nombre: 'pepe'}
persona.saludar = function() {
    console.log(`Hola soy ${this.nombre}`)
}
persona.saludarArrow()

/* algoArrow = () => {
    console.log(this)
} */