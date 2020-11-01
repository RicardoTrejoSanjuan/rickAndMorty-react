import React from 'react';
const { shallow } = require("enzyme");
const { default: HomeScreen } = require("../../pages/HomeScreen");

describe('Test en <HomeScreen />', () => {

    const title = 'The Rick and Morty API';
    const wrapper = shallow(<HomeScreen />);
    
    test('Dede mostrar el componente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe contener un <h1>', () => {
        const h3 = wrapper.find('h1');
        expect(h3.text()).toBe(title);
    });
});