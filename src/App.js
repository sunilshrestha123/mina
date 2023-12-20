import React from 'react';
import Button from '@mui/material/Button';
import { TextField, Typography } from '@mui/material';
// import ResponsiveAppBar from './components/appbar';
import Sunil from './components/Class';
import { useState } from 'react';

const App = () => {
  const [inputs, setName] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  return (
    <div class='body'>
      <div></div>
      {/* <ResponsiveAppBar /> */}
      <Typography
        variant='h5'
        sx={{
          color: 'black',
          border: '1px solid black',
          borderRadius: '10px',
          background: 'pink',
        }}
      >
        Hello Nepal
      </Typography>
      <Typography variant='h1'>!H1 heading </Typography>
      <Typography variant='h2'>!H2 heading </Typography>
      <Typography variant='h3'>!H3 heading </Typography>
      <Typography variant='h4'>!H4 heading </Typography>
      <Typography variant='h5'>!H5 heading </Typography>
      <Typography variant='subtitle1'>!H5 heading </Typography>
      <Typography variant='subtitle2'>!H5 heading </Typography>
      <Typography variant='body1'>!H5 heading </Typography>
      <Typography variant='body2'>
        Mauris condimentum suscipit dui quis porttitor. Nam erat ex, volutpat
        sed nulla nec, condimentum pulvinar urna. In hac habitasse platea
        dictumst. Mauris vitae malesuada eros. Phasellus ornare leo libero, non
        maximus nulla rhoncus id. Morbi leo mauris, tincidunt id tellus
        vehicula, cursus tempus erat. Vestibulum vehicula arcu quis egestas
        eleifend. Phasellus maximus eget lacus id dignissim. Pellentesque urna
        purus, ultrices non dui vitae, lobortis egestas diam. In quis odio
        euismod, vehicula velit et, accumsan nulla. Nullam quis erat fermentum
        lacus feugiat sodales. Integer leo nunc, sollicitudin ut lacinia sed,
        scelerisque vel nulla.{' '}
      </Typography>
      <div>
        <Button
          onClick={() => {
            alert('you have click me ');
          }}
          variant='contained'
          color='success'
          size='medium'
        >
          Click me
        </Button>
        <Button
          variant='contained'
          color='primary'
          size='medium'
          sx={{ size: '3px' }}
        >
          Hello
        </Button>
        <Button variant='contained' color='success' size='medium'>
          Hello
        </Button>
      </div>
      {/* <div>
        <TextField
          value={name}
          onChange={(e) => setName(e.target.value)}
          type='text'
          placeholder='Full Name'
          variant='outlined'
        ></TextField>
        <TextField
          type='email'
          placeholder='Email'
          variant='outlined'
        ></TextField>
        <TextField placeholder='Contact Number' variant='outlined'></TextField>
        <TextField placeholder='Message' variant='outlined'></TextField>
      </div> */}
      <div sx={{ border: 'black ' }}>
        <TextField
          value={inputs.name}
          onChange={(e) => setName(e.target.name)}
          type='text'
          placeholder='Full Name'
          variant='outlined'
        ></TextField>
        <TextField
          value={inputs.email}
          type='email'
          placeholder='Email'
          variant='outlined'
        ></TextField>
        <TextField
          value={inputs.phone}
          placeholder='Contact Number'
          variant='outlined'
        ></TextField>
        <TextField
          value={inputs.message}
          placeholder='Message'
          variant='outlined'
        ></TextField>
      </div>
      <h1>my name is {inputs.name}</h1>
      console.log(inputs.name)
      <Sunil />
    </div>
  );
};

export default App;
