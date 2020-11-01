// import React from 'react';
const { renderHook } = require("@testing-library/react-hooks");
const { default: useFetchCharacters } = require("../../hooks/useFetchCharacters");
// import {renderHook} from '@testing-library/react-hooks'

describe('Test en useFetchCharacters', () => {
    
    test('Dede retornar el esta inicial', async() => {

        const {result, waitForNextUpdate} = renderHook(() => useFetchCharacters('rick'));
        const { data, loading } = result.current;
        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toEqual(true);
    });
});

describe('debe de retornar un arreglo de elementos y el loading en false', () => {
    
    test('Dede retornar el esta inicial', async() => {

        const {result, waitForNextUpdate } = renderHook(() => useFetchCharacters('rick'));
        await waitForNextUpdate();
        const { data, loading } = result.current;

        expect(data.length).toBe(20);
        expect(loading).toEqual(false);
    });
});