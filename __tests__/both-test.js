import React from 'react';
import {shallow} from 'enzyme';
import Both from '../src/both';

it('Both checkboxes are there', () => {
    // Render a checkbox with label in the document
    const indexPage = shallow(
        <Both/>
    );

    expect(indexPage.find('CheckboxWithLabel')).toBeTruthy();
    expect(indexPage.find('PetboxWithLabel')).toBeTruthy();
});
