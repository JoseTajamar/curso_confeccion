
isMultiplo= require('../02_multiplos.js')

describe('Funcion isMultiplo', () => {

    it('should be true that 20 is multiple of 2', () => {
        expect(isMultiplo(2,20)).toBeTruthy()
    });
    it('should be false that 21 is multiple of 2', () => {
        expect(isMultiplo(2,21)).toBeFalsy()
    });
    
});




/* // Espectativas
console.log('isMultiplo(2,-20) debe dar true')
// Prueba
console.log(isMultiplo(2,-20))
// Espectativas
console.log('isMultiplo(2,-21) debe dar false')
// Prueba
console.log(isMultiplo(2,-21))
// Espectativas
console.log('isMultiplo(3,20) debe dar false')
// Prueba
console.log(isMultiplo(3,20))
// Espectativas
console.log('isMultiplo(3,21) debe dar true')
// Prueba
console.log(isMultiplo(3,21))
 */ 