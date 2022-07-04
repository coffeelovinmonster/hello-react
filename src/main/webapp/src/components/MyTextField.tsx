import React from 'react';
import ReactDOM from 'react-dom/client';
import { TextField as MuiTextField } from '@material-ui/core';

interface myProps {
    labelTxt: String
}

export function MyTextField(props : myProps) {
    return (
        <MuiTextField variant='outlined' fullWidth helperText="Helper Text" label={props.labelTxt}/>
    )
}