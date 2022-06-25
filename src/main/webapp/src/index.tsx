import React from 'react';
import ReactDOM from 'react-dom/client';
import { Label } from './components/Label';
import { MyTextField } from './components/MyTextField';
import { MyButton } from './components/MyButton';
import { Grid } from '@material-ui/core';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

function Component() { 
  return (
    <div className="mapDiv" style={{width:"800px",  height:"600px"}}>
      <form>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Label title={"This is a label"} />
          </Grid>
          <Grid item xs={12}>
            <MyTextField />
          </Grid>
          <Grid item xs={12}>
            <Label title={"This is another label"} />
          </Grid>
          <Grid item xs={12}>
            <MyTextField />
          </Grid>
          <Grid item xs={12}>
            <MyButton btnText="This is a button" />
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

root.render(
  <Component />
);