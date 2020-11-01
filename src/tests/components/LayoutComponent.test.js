import React from 'react';
const { shallow } = require("enzyme");
const { default: Layout } = require("../../components/LayoutComponent");


describe('Test en <Layout />', () => {
    
    test('Dede mostrar el componente <Layout/>', () => {

        const wrapper = shallow(<Layout/>);

        expect(wrapper).toMatchSnapshot();
    });

    test('Debe contener los siguientes elementos html', () => {

        const wrapper = shallow(<Layout />);

        expect(wrapper.find('nav').exists()).toBe(true);
        expect(wrapper.find('.container').exists()).toBe(true);
        expect(wrapper.find('button').exists()).toBe(true);
        expect(wrapper.find('.nav-item').exists()).toBe(true);
    });

});