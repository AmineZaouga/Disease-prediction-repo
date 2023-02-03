import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
//import { Link } from 'react-router-dom';  



const theme = createTheme();

export default function SignIn() {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({"email":"","password":""});
  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post(`https://localhost:7196/api/User/login?email=${formData.email}&password=${formData.password}`)
    .then(res => {
      if(res.status===200)
      navigate('/dashboard');
      window.sessionStorage.setItem("TOKEN", res.data.id+res.data.firstname);
    })
    setFormData({"email":"","password":""})
  };
  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
            onChange={handleChange}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={formData.email}
              autoComplete="email"
              autoFocus
            />
            <TextField
            onChange={handleChange}
              margin="normal"
              required
              fullWidth
              value={formData.password}
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" onClick={(e)=>{alert("not finished yet")}}>
                  Swagger Admin
                </Link>
              </Grid>
              <Grid item>
                <Link href="./signUp" variant="body2">
                {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}