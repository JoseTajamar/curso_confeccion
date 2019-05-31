/* Datos
-undefined
-Primitivos
    -number
    -string 
    -boolean
-Referenciados : 
        -objects 
        -Array 
        -Data 
        -Error 
        -RegExp
        -Math 
        -JSON
        -Function
     
        
-Variables
    -Tipo: Débiles (implícitos al valor) y dinamicos
-Ciclo de vida
        -Declaración : inicialización : asignación
*/

let x = 34 //declaración + inicializacion
//....
//....
x = 45 //asignación
x = x * 2 //asignación por expresiones

/**Ámbito:
 *  -Global
 *  -Local:
 *      -al bloque => let / const
 *      -a la función => var
 */



 let a = 31 //Global


 //hoisting de funciones y variables var

 function prueba() {
     let a = 12 // local a la función
     let b = 67
     var z = 7   
      console.log("variable local al bloque", a)//
      console.log(b)
     if (true) {
         let a = 78 // local
         var z = 23
         
     }
     console.log(a) //12
     console.log(z)
 }

 prueba()

 let s
 s = 8

/*  constantes
    -ciclo de vida: declaracion + inicializacion */

 const IVA = 1.26
 //IVA = 1.34 //-> Da error

 //Constantes referenciadas => es constante la referencia 

 const user = {nombre: 'Pepe', edad: 34}
 user.nombre = 'Juan'
 user.nombre = 32
 console.log(user)
 //user = {nombre: 'juan', edad: 32} -->ERROR
 //console.log(user)


//hoisting: de funciones declaradas y variables var (solo la declaracion)

izar()
function izar (){
    console.log("Izado")
    console.log('z vale',  z)
    var z = 7
}
/* Lo que pasa realmente
function izar (){
    var z
    console.log("Izado")
    console-log("z vale"), z
    z = 7
    
}
 */

 /**Casting
  * Cambio de tipo temporal durante una operacion
  */

  // Casting a string
  let n = 23
  let msg = 'Juan tiene ' + n // 'Jua n tiene 23'
  console.log(typeof n)

  // Casting a number
  let indice = '34'
  let incremento = indice * 0.10

  // Casting a boolean

  let w

// Falsy
w = false
w = undefined
w = null
w = 0
w = ''

// Truly
w = true
w = 23
w = -34
w = ' '
w = 'Pepe'
w = {}
w = []

if(w){}

// Operadores
// Aritmeticos: + - * / %