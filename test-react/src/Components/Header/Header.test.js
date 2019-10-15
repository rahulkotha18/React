import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr } from './../../../Utils';
import Header from './index';

const setUp = (props={}) => {
    const component = shallow(<Header {...props} />);
    return component;
};

describe('Header Component', () => {

    let component;
    beforeEach(() => {
        component = setUp(); 
    });

    it('Should render without errors', () => {
        const wrapper = findByTestAtrr(component, 'headerComponent');
        expect(wrapper.length).toBe(1);
    });

});Down added #17883
Closed
1 of 1 task complete