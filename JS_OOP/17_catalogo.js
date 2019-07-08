
function Libro(descripcion, codigo, precio) {
    this.descripcion = descripcion
    this.codigo = codigo
    this.precio = precio
}
Libro.prototype.iva = 0.04
Libro.prototype.calcularIVA = function () {
    return{
        iva: this.precio * this.iva,
        total: this.precio + (this.precio * this.iva)
    }
    
}
Libro.prototype.mostrar = function () {
    const importe = this.calcularIVA()
    const cadena = `
    Descripcion: ${this.descripcion}
    Codigo: ${this.codigo}
    Precio:${this.precio}
    IVA: ${importe.iva}
    Precio Total: ${importe.total}
    `
    console.log(cadena)
}

const l1 = new Libro ('Las ranas', '0034Y4', 22)
l1.mostrar()
console.log(l1)
const l2 = new Libro ('Los sapos', '0034Z3', 22)
l2.mostrar()
console.log(l2)
const l3 = new Libro ('Manga: Z', '0065Z3', 12)
l3.iva = 0.12
l3.mostrar()
console.log(l3)
