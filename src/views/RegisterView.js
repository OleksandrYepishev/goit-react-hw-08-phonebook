import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import {TextField, Grid } from '@material-ui/core';
import { AccountCircle, Email} from '@material-ui/icons';
import PasswordIcon from '@mui/icons-material/Password';
import {Button} from '@mui/material';

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
          <Grid container direction="column" alignItems="flex-end" spacing={0}>
          <form onSubmit={handleSubmit} autoComplete="off">
          <Grid container spacing={1} alignItems="flex-end">  
            <Grid item>
              <AccountCircle />
            </Grid>
            <Grid item >
              <TextField
                type="text" name="name" value={name} onChange={handleChange}
                id="input-with-icon-grid" label="Please enter your Name" />
            </Grid>
          </Grid>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <Email />
            </Grid>
            <Grid item>
              <TextField
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              id="input-with-icon-grid" label="Please enter your email" />
            </Grid>
          </Grid>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <PasswordIcon />
             </Grid>    
          <Grid item>
            <TextField
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              id="input-with-icon-grid" label="Your password" />
          </Grid>
        </Grid>
        
        <Button variant="contained" type="submit" sx={{ m:7 }}>
          Registration
        </Button>
      </form>
   </Grid>
  );
}
