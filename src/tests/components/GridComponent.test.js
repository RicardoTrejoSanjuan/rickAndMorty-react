import React from 'react';
import useFetchCharacters from '../../hooks/useFetchCharacters';
const { shallow } = require("enzyme");
const { default: GridComponent } = require("../../components/GridComponent");

jest.mock('../../hooks/useFetchCharacters');

describe('Test en <GridComponent />', () => {

    const character = 'rick';
    
    test('Dede mostrar el componente', () => {

        useFetchCharacters.mockReturnValue({
            data: [],
            loading: true,
        });
        const wrapper = shallow(<GridComponent character={character} />);

        expect(wrapper).toMatchSnapshot();
    });

    test('Debe contener un <h5>', () => {

        useFetchCharacters.mockReturnValue({
            data: [],
            loading: true,
        });
        const wrapper = shallow(<GridComponent character={character} />);

        const h5 = wrapper.find('h5');
        expect(h5.text()).toBe('There is nothing here...');
    });

    test('Debe contener <ItemComponent />', () => {

        const data = [{
            id: 1,
            name: "Rick Sanchez",
            status: "Alive",
            species: "Human",
            gender: "Male",
            image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        }];

        useFetchCharacters.mockReturnValue({
            data: data,
            loading: false,
        });
        const wrapper = shallow(<GridComponent character={character} />);

        const itemComponent = wrapper.find('ItemComponent');

        expect(wrapper).toMatchSnapshot();

        expect(wrapper.find('p').exists()).toBe(false);
        
        expect(wrapper.find('ItemComponent').length).toBe(data.length);
    });


});