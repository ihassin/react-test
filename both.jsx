import React from 'react';
import CheckboxWithLabel from './checkbox-with-label';
import PetboxWithLabel from './petbox-with-label';

const checkBox = <CheckboxWithLabel labelOn="On" labelOff="Off" />;
const petBox = <PetboxWithLabel labelOn="Mouse" labelOff="Cat" />;

export const both = (
    <div>
        {checkBox}
        <br/>
        {petBox}
    </div>
);

