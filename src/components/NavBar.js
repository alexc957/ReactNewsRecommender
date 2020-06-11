import React from 'react';
import AppBar  from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {  Link} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';






const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
    rootLink: {
        '& > * + *': {
            marginLeft: theme.spacing(2),
          }
    }
  }));



const NavBar = () => {
    // const theme = createMuiTheme();
    const classes = useStyles();
    // const navigate = useNavigate();
  
      
     
    // console.log('navbar data',data);
    const onLogOut = (event) => {
        // event.preventDefault()
        let token = localStorage.getItem('token')
        console.log('before logout',token);
        localStorage.setItem('token','');
        token = localStorage.getItem('token')
        console.log('after logout', token)
    } 
    
    
   
    return (
        <div className = {classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6"  component={'span'} className = {classes.title}>
                        NewsPaper 

                    </Typography>
                
                    {localStorage.getItem('token') ? (
                        <Typography className={classes.rootLink}>
                            <Link href="/" color="inherit" onClick = {onLogOut}>Log Out</Link>
                        </Typography>
                    ) : (
                        <div>
                            <Link style={{margin: '4px'}} href="/login"  color="inherit">
                                Login
                            </Link>
                            <Link style={{margin: '4px'}} href="/signup"  color="inherit">
                                Sign Up
                            </Link>
                        </div>
                    )}

                      
                </Toolbar>

               
                
            </AppBar>
        </div>
    );
}

export default NavBar;