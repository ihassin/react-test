import React from 'react';
import {shallow} from 'enzyme';
import CheckboxWithLabel from '../checkbox-with-label';
import PetboxWithLabel from '../petbox-with-label';
import {both} from '../both';

it('CheckboxWithLabel changes the text after click', () => {
    // Render a checkbox with label in the document
    const checkbox = shallow(
        <CheckboxWithLabel labelOn="On" labelOff="Off" />
    );

    expect(checkbox.text()).toEqual('Off');

    checkbox.find('input').simulate('change');

    expect(checkbox.text()).toEqual('On');
});

it('CheckboxWithLabel changes the text after click', () => {
    // Render a checkbox with label in the document
    const checkbox = shallow(
        <PetboxWithLabel labelOn="Mouse" labelOff="Cat" />
    );

    expect(checkbox.text()).toEqual('Cat');

    checkbox.find('input').simulate('change');

    expect(checkbox.text()).toEqual('Mouse');
});

it('Both checkboxes are there', () => {
    // Render a checkbox with label in the document
    const indexPage = shallow(both);

    expect(indexPage.find('CheckboxWithLabel')).toBeTruthy();
    expect(indexPage.find('PetboxWithLabel')).toBeTruthy();
});
