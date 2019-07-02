function isRey(nombre){
const aReyes = [
    'Fernando', 'Isabel', 'Juana', 'Carlos', 'Felipe', 'Luis', 'Jose','Amadeo', 'Alfonso', 'Juan Carlos'
]
    for (let i = 0; i < aReyes.length; i++) {
        const item = aReyes[i];
            if( nombre.toUpperCase() == item.toUpperCase()) {
                return true
        }
    }
    return false
}

function mostrarIsRey(nombre) {
    const mensajes = [
        `El nombre ${nombre.toUpperCase()}, no ha sido usado por ningún rey de España`,
        `El nombre ${nombre.toUpperCase()}, ha sido usado por algún rey de España`
    ]
    console.log (mensajes [+isRey(nombre)])
}
mostrarIsRey('Fernando')
mostrarIsRey('Federico')
mostrarIsRey('Pepe')