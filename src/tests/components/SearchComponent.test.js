import React from 'react';
const { shallow } = require("enzyme");
const { default: SearchComponent } = require("../../components/SearchComponent");

describe('Test en <SearchComponent />', () => {

    const setCharacter = (e) => console.log(e);
    
    test('Dede mostrar el componente', () => {
        const wrapper = shallow(<SearchComponent setCharacter={ setCharacter } />);

        expect(wrapper).toMatchSnapshot();
    });

    test('Debe contener un <div className="card">', () => {
        const wrapper = shallow(<SearchComponent setCharacter={ setCharacter } />);

        expect(wrapper.find('form').exists()).toBe(true);
    });

});