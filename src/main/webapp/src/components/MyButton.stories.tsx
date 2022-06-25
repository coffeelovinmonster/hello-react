import React from 'react';
import { MyButton } from './MyButton'
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    component: MyButton,
    title: 'Generic Components',
};

const Template: ComponentStory<typeof MyButton> = (args) => <MyButton {...args} />

export const button = Template.bind({});
button.args = {
    btnText: 'This is a Mui Button'
}