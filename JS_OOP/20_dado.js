

const dado = {
    _valor: null,
    lanzar: function() {
        this._valor = parseInt(Math.random()*S) +1
        console.log(this._valor)
    }
}

for (let i = 0; i < 20; i++) {
    dado.lanzar()
}