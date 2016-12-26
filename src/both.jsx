import React from 'react';
import CheckboxWithLabel from './checkbox-with-label';
import PetboxWithLabel from './petbox-with-label';

const checkBox = <CheckboxWithLabel labelOn="On" labelOff="Off" />;
const petBox = <PetboxWithLabel labelOn="Mouse" labelOff="Cat" />;

const Both = () => (
    <div>
        {checkBox}
        <br/>
        {petBox}
    </div>
);

export default Both;
