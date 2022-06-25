import React from 'react';
import ReactDOM from 'react-dom/client'
import { InputLabel as MuiLabel } from '@material-ui/core';

interface LabelProps {
    title:String
}

export function Label(props:LabelProps) {
    return (
        <MuiLabel>{props.title}</MuiLabel>
    );
} 