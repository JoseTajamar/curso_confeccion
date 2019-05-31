/**
 * JSDoc
 * @description Programa que calcula y muestra 
 *              si un numero es par o impar
 */


 /**
  * @description Funcion que calcula si un numero es par
  * @param {number}: n
  * @returns {boolean}
  */

  function esPar(n) {
      let r = true
      console.log( (n%2) )
      return r
  }


  let x = 1
  console.log( !(x%2) )
  x = 2
  console.log( !(x%2) )
  x = 3
  console.log( !(x%2) )
  x = 4
  console.log( !(x%2) )


/**
 * @description Funcion que muestra si un numero es par o impar
 * @param {number}: n
 * @returns {void}
 */

function mostrar(n) {
    mensajes = [
        'El numero ${n}  es par'
        'El numero ${n} es par'
    ]
    let i = 0
    Number(esPar(n))
    console.log(mensajes[i])
}


