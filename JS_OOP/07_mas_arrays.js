    

    const aDatos = ['perro', 'gato']
    aDatos.length

    // Implementadas como inmutables
    console.log(aDatos.concat(['leon', 'tigre']))
    console.log(aDatos)

    // Implementadas com mutables
    aDatos.sort()
    console.log(aDatos)

    const aNumbers = [32, 3, 2, 21, 56, 5, 9]
    const aNumerosOriginal = aNumbers.slice()

    aNumbers.sort( (a,b) => a-b )
    console.log(aNumbers)
    console.log(aNumerosOriginal.reverse())
    console.log(aNumerosOriginal)

    let nombres = ['Luis', 'Ramon', 'Juan','Rosa','Julia', 'Maria']

    //Fraccionar arrays: inmutable
    console.log(nombres.slice(1, 3))
   // console.log(seleccion)
    console.log(nombres)
    //fraccionar arrays: mutable
    let elmininados = nombres.splice(1, 3, 'Pedro', 'Ernesto')
    console.log(elmininados)
    console.log(nombres)
    //Splice para añadir

    let paises = ['Francia', 'Italia', 'Hungria', 'Holanda', 'España'] 
    console.log(paises.splice(2, 0, 'España'))
    console.log(paises)

    //Pilas y colas
    console.log( paises.push('Portugal', 'Alemania'))
    paises.pop()
    console.log(paises)
    
    //

/* let aDatos = ['perro', 'gato']
aDatos.length // me devuelve la longitud del array 
aDatos.concat //sirve para concatenar arrays 
///implementadas como inmutables no afercta al array

console.log(aDatos.concat(['caballo', 'leon']))
console.log(aDatos)


//implementadas como mutables
aDatos.sort() //ordena alfabeticamente o por orden numerico alfetico 1 100, 2, 23, 333 si no le doy parametro 
//si le doy parametros es una funcion callbakcs  puesto que le estoy pasando una funcion a otra para que la use 
console.log(aDatos)
let aNumeros = [9, 32, 3, 2, 21, 56 ]

//            CLoNAR
let aNumerosOrigin = aNumeros.slice() // el slice me clona el array // con su referencia 
aNumeros.sort((a,b)=> a-b) // tras poner esto los ordena nmericamente ascendente 
aNumeros.sort((a,b)=> b-a)// tras poner esto los ordena nmericamente ascendente 1,2,20,35,100,300 ya normal 
console.log(aNumeros)
console.log(aNumerosOrigin.reverse()) // te lo vuelve del reves  */