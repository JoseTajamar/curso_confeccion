
describe('Función isEntero', () => {
    let f = require('../10_pares')

    it('should be true if n is 2', () => {
        let n = 2
        expect(f.isEntero(n)).toBeTruthy()
    });

    it('should be false if n is 2.2', () => {
        let n = 2.2
        expect(f.isEntero(n).toBeFalsy()
    });

    it('should be true if n is -2', () => {
        let n = -2
        expect(f.isEntero(n).toBeTruthy()
    });

    it('should be false if n is -2.2', () => {
        let n = -2.2
        expect(f.isEntero(n).toBeFalsy()
    });

    it('should be true if n is 0', () => {
        let n = 0
        expect(f.isEntero(n).toBeTruthy()
    });

    it('should be true if n is "2"', () => {
        let n = '2'
        expect(f.isEntero(n).toBeTruthy()
    });
});

describe('Función esPar', () => {
    let f = require('../10_pares')

    it('should be true if n is 0', () => {
        let n = 0
        expect(f.esPar(n)).toBeTruthy()
    });

    it('should be false if n is 1', () => {
        let n = 1
        expect(f.esPar(n)).toBeFalsy()
    });

    it('should be true if n is 2', () => {
        let n = 2
        expect(f.esPar.bind(n)).toBeTruthy()
    });

    it('should be false if n = string "11"', () => {
        let n = 11
        expect(f.esPar(n)).toBeFalsy()
    });


});