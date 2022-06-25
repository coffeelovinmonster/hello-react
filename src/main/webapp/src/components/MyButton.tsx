import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button as MuiButton } from '@material-ui/core';

interface myProps {
    btnText: String
}

export function MyButton (props: myProps) {
    return (
        <MuiButton className="myButton" variant='contained' fullWidth>{props.btnText}</MuiButton>
    )
}