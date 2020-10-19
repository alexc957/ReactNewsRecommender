import React, { useState } from 'react'
import { Container } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { useNavigate } from "@reach/router"
import SnackBarMessage from "../components/SnackBarMessage";
import Loading from "../components/Loading";
import NavBar from "../components/NavBar";

const CREATE_USER = gql`
mutation CreateUser($email: String!, $password: String!, $username: String! ) {
    createUser(email: $email, password: $password, username: $username) {
        user {
            username
        }
    }
}

`

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

const SignUp = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const [createUser, {data, loading, error}] = useMutation(CREATE_USER);

    const [email, setEmail ] = useState('');
    const [username, setUsername ] = useState('');
    const [password, setPassword ] = useState('');
    const [emptyFields, setEmptyFields] = useState(false)

    const signUpUser = (event) => {
       event.preventDefault()
        if(email && username && password){
            console.log("helo")

            createUser({
                variables: {
                    email,
                    password,
                    username
                }
            })
            setEmptyFields(true)

        } else {
            setEmptyFields(true)
        }
        console.log(email)
        console.log(username)
        console.log(password)


       


    }

    if(data) {
        //console.log(data);

        navigate('/login')
    }
    if(loading) {
        // console.log('loading');
        return  (<div>
            <NavBar/>
            <Loading />
        </div>)

    }
    if(error) {
        console.log('error',error);
        //return <p>Error</p>
        // return  <SnackBarMessage message={"there was an error while signing up "} openFlag={true} />


    }
    return (
        <div>
            <NavBar />

            <Container component="main" maxWidth="xs">
                <CssBaseline />

                <div className={classes.paper}>
                    <Avatar>
                        <LockOutlinedIcon />
                    </Avatar>

                    <Typography component = "h1" variant="h5">
                        Sign Up
                    </Typography>

                    <form className= {classes.form} noValidate onSubmit={signUpUser}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            onChange = {(e) => setEmail(e.target.value)}
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
                            onChange = {(e) => setPassword(e.target.value)}
                            autoComplete="current-password"
                        />

                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="username"
                            label="username"
                            type="text"
                            id="username"
                            onChange = {(e) => setUsername(e.target.value)}
                            autoComplete="username"
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}

                        >
                            Create Account
                        </Button>
                    </form>

                </div>

                {
                    error? (
                        <SnackBarMessage message={"there was an error while signing up "} openFlag={true} />
                    ) : ''
                }
                {
                    emptyFields && <SnackBarMessage message={"Fill all the required fields"} openFlag={true} />
                }
            </Container>
        </div>
    )
}

export default SignUp