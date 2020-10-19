import React, {useState, Fragment} from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));

const SnackBarMessage  = ({message, openFlag, setFlag}) => {
    //const [open, setOpen] = useState(openFlag);
    const classes = useStyles();
    console.log("se vuelve a renderizar, opneflag = ",openFlag);

    const handleClose = (event, reason) => {
        /*if (reason === 'clickaway') {
            

            return;
        }*/
        setFlag(false);
       // setOpen(false);
    };

    return (
        <div>

            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                open={openFlag}
                autoHideDuration={6000}
                onClose={handleClose}
                
               
            >
                <Alert onClose={handleClose} severity="error">
                    {message}
                </Alert>
            </Snackbar>
        </div>
    );


}

export default  SnackBarMessage;

/*

 action={
                    <div>
                       
                        <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </div>
                }

*/