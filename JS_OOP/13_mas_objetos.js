//Serializacion
//JSON.stringify()
//JSON.parse()

const oDatos = {
    user: 'Pepe',
    edad: 23,
    curso: 'Front',
    direccion: {
        calle: 'Pez 1',
        ciudad: 'Cadiz'
    }
}

let cadena = JSON.stringify(oDatos)
console.log(cadena)
console.log(typeof cadena)
console.log(oDatos)
let oNuevosDatos = JSON.parse(cadena)
console.log(oNuevosDatos)
console.log(typeof oNuevosDatos)

//Clonando deep

const clon = JSON.parse(JSON.stringify(oDatos))
clon.direccion.ciudad = 'Huelva'
clon.direccion.ciudad = 'Malaga'
console.log(oDatos)
console.log(clon)
