const o = {
    id: 123,
    nombre: 'pepe',
    edad: 43,
    mostrarID: function() {
        function mostraID (p) {
            console.log(p.id)
        }

        mostrarID(o)        
    }
}

o.saludar = () => {
    console.log(`Hola soy ${this.nombre}`)
}

o.mostrarID()
o.saludar()