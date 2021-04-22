import '@testing-library/jest-dom';
import { getSaludo } from '../../base-pruebas/02-template-string';

describe('Testing at 02-template-string.js', () => {

    test('getSaludo must return Hello Fernando', () => {

        const name = 'Fernando';
        const greeting = getSaludo(name);

        expect( greeting ).toBe( 'Hola ' + name); //toBe operator is doing  greeting === 'Hola Fernando'
    });

    test('getSaludo must return Hello Carlos sino hay valor en el argumento nombre', () => {

        const greeting = getSaludo();
        expect( greeting ).toBe( 'Hola Carlos');
    })

    
})