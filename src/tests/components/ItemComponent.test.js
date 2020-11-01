import React from 'react';
const { shallow } = require("enzyme");
const { default: ItemComponent } = require("../../components/ItemComponent");

describe('Test en <ItemComponent />', () => {

    const character={
        id: 1,
        name: "Rick Sanchez",
        status: "Alive",
        species: "Human",
        gender: "Male",
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    };
    
    test('Dede mostrar el componente', () => {
        const wrapper = shallow(<ItemComponent character={character} />);

        expect(wrapper).toMatchSnapshot();
    });

    test('Debe contener un <div className="card">', () => {
        const wrapper = shallow(<ItemComponent character={character} />);

        expect(wrapper.find('.card').exists()).toBe(true);
    });

});