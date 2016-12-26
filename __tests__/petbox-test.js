import React from 'react';
import {shallow} from 'enzyme';
import PetboxWithLabel from '../src/petbox-with-label';

it('PetboxWithLabel changes the text after click', () => {
    // Render a checkbox with label in the document
    const checkbox = shallow(
        <PetboxWithLabel labelOn="Mouse" labelOff="Cat" />
    );

    expect(checkbox.text()).toEqual('Cat');

    checkbox.find('input').simulate('change');

    expect(checkbox.text()).toEqual('Mouse');
});
