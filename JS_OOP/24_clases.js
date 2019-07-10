function Coche(marca, modelo, color, energia, precio) {
    this.marca = marca
    this.modelo = modelo
    this.color = color
    this.energia = energia
    this.precio = precio
}


Coche.prototype.arrancar = function(){
    console.log('run, run')
    return this
}
Coche.prototype.ver = function () {
    console.log(this)
}

const c1 = new Coche('Audi', 'A3', 'Purpura', 'Hibrido', 20000)
c1.arrancar().ver()