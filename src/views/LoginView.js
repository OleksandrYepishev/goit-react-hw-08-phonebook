import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {TextField, Grid } from '@material-ui/core';
import {Email} from '@material-ui/icons';
import PasswordIcon from '@mui/icons-material/Password';
import {Button} from '@mui/material';
import { authOperations } from '../redux/auth';

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
   <Grid container direction="column"alignItems="flex-start" spacing={0} sx={{ m:7}}>
          <form onSubmit={handleSubmit} autoComplete="off">
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
        
        <Button variant="contained" type="submit" sx={{ m: 7 }}>
          Log in
        </Button>
      </form>
   </Grid>
  );
}
