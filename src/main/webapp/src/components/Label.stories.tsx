import React from 'react';
import {Label} from './Label';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    component: Label,
    title: 'Generic Components',
}

const Template: ComponentStory<typeof Label> = (args) => <Label {...args}/>

export const label = Template.bind({value: "This is a label"});