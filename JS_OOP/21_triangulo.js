






 function Triangulo(l1, l2, l3) {
     this.l1 = l1
     this.l2 = l2
     this.l3 = l3
 }
 Triangulo.prototype.getLados = function() {
     return this
 }
 Triangulo.prototype.getPerimetros = function() {
    return this._l1 + this._l2 + this._l3
}

const t = new Triangulo(5, 8, 5)
console.log(t.getPerimetros)