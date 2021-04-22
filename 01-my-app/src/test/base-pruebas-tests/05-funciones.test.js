import '@testing-library/jest-dom';
import { getActiveUser, getUser } from "../../base-pruebas/05-funciones";

describe('Test 05-Funciones', () => {

    test('getUser() must return an object', () => {

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        // expect( user ).toBe( userTest ); --> por el metodo toBe esto está haciendo {} === {} lo cual devuelve false por tanto falla la prueba

        expect( user ).toEqual( userTest ); //toEqual operator is strictly comparing an object with other object, they must have the same keys and the same values to pass the test

    });

    test('getActiveUser() must return an object', () => {

        const nombre = 'Rafa';
        const activeUser = getActiveUser(nombre);

        expect( activeUser ).toEqual({
            uid: 'ABC567',
            username: nombre
        }); 
        
        //toEqual operator is strictly comparing an object with other object, they must have the same keys and the same values to pass the test

    });
});