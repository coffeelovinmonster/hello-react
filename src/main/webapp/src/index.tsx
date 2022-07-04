import React from 'react';
import ReactDOM from 'react-dom/client';
import { Label } from './components/Label';
import { MyTextField } from './components/MyTextField';
import { MyButton } from './components/MyButton';
import { Grid } from '@material-ui/core';
import { Container } from '@material-ui/core'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

function Component() { 
  return (
    <div className="formDiv">
      <Container className='formContainer' maxWidth='xs'>
        <Grid container spacing={1}>
          {/* <Grid item xs={12}>
            <Label title={"This is a label"} />
          </Grid> */}
          <Grid item xs={12}>
            <MyTextField labelTxt="Username"/>
          </Grid>
          {/* <Grid item xs={12}>
            <Label title={"This is another label"} />
          </Grid> */}
          <Grid item xs={12}>
            <MyTextField labelTxt="Password"/>
          </Grid>
          <Grid item xs={12}>
            <MyButton btnText="This is a button" />
          </Grid>
        </Grid>
      </Container>
      <Container>
        
      </Container>
    </div>
  );
}

root.render(
  <Component />
);