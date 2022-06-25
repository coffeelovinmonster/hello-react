import React from 'react';
import { MyTextField } from './MyTextField'

export default {
    component: MyTextField,
    title:"Generic Components",
}

const Template = (args: String) => <MyTextField/>

export const textField = Template.bind({});

