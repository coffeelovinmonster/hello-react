import React from 'react';
import ReactDOM from 'react-dom/client'

interface LabelProps {
    title:String
}

export function Label(props:LabelProps) {
    return (
        <label style={{width:"50px", height:"20px"}}>{props.title}</label>
    );
}