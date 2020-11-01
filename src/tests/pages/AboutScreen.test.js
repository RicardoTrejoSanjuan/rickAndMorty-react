import React from 'react';
const { shallow } = require("enzyme");
const { default: AboutScreen } = require("../../pages/AboutScreen");

describe('Test en <AboutScreen />', () => {

    const title = 'Ricardo Trejo Sanjuan';
    const wrapper = shallow(<AboutScreen />);
    
    test('Dede mostrar el componente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe contener un <h3>', () => {
        const h3 = wrapper.find('h3');
        expect(h3.text()).toBe(title);
    });
});