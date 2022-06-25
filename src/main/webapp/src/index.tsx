import React from 'react';
import ReactDOM from 'react-dom/client';
import { Label } from './components/Label';
import { TextField } from './components/TextField';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

function Component() { 
  return (
    <div className="mapDiv" style={{width:"800px",  height:"600px"}}>
      <Label title={"This is a label"} />
      <TextField />
      <br />
      <Label title={"This is another label"} />
      <TextField />
    </div>
  );
}

root.render(
  <Component />
);