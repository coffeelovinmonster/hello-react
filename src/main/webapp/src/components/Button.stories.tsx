import React from 'react';
import {Button} from './Button'

export default {
    component: Button,
    title: 'Generic Components',
};

const Template = (args: String) => <Button {...args} />

export const button = Template.bind({});
