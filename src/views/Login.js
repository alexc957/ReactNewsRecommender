import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { useNavigate } from "@reach/router"
import { onError } from "apollo-link-error";
import SnackBarMessage from "../components/SnackBarMessage";
import Loading from "../components/Loading";
import NavBar from "../components/NavBar";

const AUTH_USER = gql`
mutation TokenAuth($username: String!, $password: String! ) {
    tokenAuth(username: $username, password: $password) {
        token
    }
}`

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login() {
  const classes = useStyles();
  const navigate = useNavigate()
  const [tokenAuth, {data,loading, error}] = useMutation(AUTH_USER);
  console.log(AUTH_USER)

  const [username, setUsername ] = useState('');
  const [password, setPassword ] = useState('');


  const loginUser = (event) => {
      event.preventDefault()
      console.log(username)
      console.log(password)
      tokenAuth({
          variables: {
              username: username,
              password: password
          }
      }) 



   

        
 
     
  }

  if (data) {
    //console.log('token?',data);
    localStorage.setItem('token',data.tokenAuth.token);
    navigate('/');
  }

  if (error) {
    localStorage.setItem('token','');
    // console.log('error', error);

  //  return  <SnackBarMessage message={"there was an error while login"} openFlag={true} />

  }
  if (loading) {
    // localStorage.setItem('token','');
    return (<div>
      <NavBar/>
      <Loading />
    </div>)
  }

  onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.map(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
        ),
      );
  
    if (networkError) console.log(`[Network error]: ${networkError}`);
  });



  return (
      <div>
        <NavBar />
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form className={classes.form} noValidate onSubmit={loginUser}>
              <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="username"
                  name="username"
                  autoComplete="username"
                  onChange= {(event) => setUsername(event.target.value)}
                  autoFocus
              />
              <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  onChange= {(event) => setPassword(event.target.value)}
                  autoComplete="current-password"
              />

              <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}

              >
                Sign In
              </Button>

            </form>
          </div>
          {error? (
              <SnackBarMessage message={"there was an error while login"} openFlag={true} />
          ) : ''}

        </Container>
      </div>

  );
}