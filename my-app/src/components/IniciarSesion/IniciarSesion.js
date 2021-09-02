import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { red } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
  root:{
    //background: 'red'
    backgroundImage: `url('https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80')`,
    backgroundPosition: 'center', /* Center the image */
    backgroundRepeat: 'no-repeat', /* Do not repeat the image */
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    color:'#fff',
    height:'100vh',
    width: '100%',
    //filter: 'grayscale(100%)',
      '&:before': {
        content : '""',
        width: '100%',
        minHeight: '100vh',
        filter: 'grayscale(100%)',
        background: '#000',
        postion: 'absolute',
        top: '0',
        left: '0',
        //zIndex: '-1',
      }
  },
  container: {
    //backgroundColor: 'red',
    //marginTop: '10px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '100%'

  },
  paper: {
    //marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#fff',
    color: '#000',
    width: '305px',
    padding: '35px 20px 20px 20px',
    borderRadius: '25px',
    //height: '569px',
    //marginTop: '1em' ,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#44ff53',
    transition: '0.4s',
    '&:hover': {
      backgroundColor: '#75f37f'
    }
  },
  image:{
    background: '#3CDBA0',
    borderRadius: '300px',
    borderBottomLeftRadius: '0px',
    padding: '30px',
    width: '200px',
    height: '200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& h5': { fontWeight: 'bold', textAlign: 'center' }
  },
  rootTextField: {
    '& label.Mui-focused': {
      backgroundColor: '#ffffff',
      color: '#22ff00',
      padding: '5px',
      paddingTop: '0'
    },
    '&:before': {
      content: 'attr(div)',
      display: 'block',
      position:'absolute',
      width: '100%',
      height: '100%',
      top: '0',
      left: '0',
      backgroundImage: 'linear-gradient(to right, #22ff33, #c6e4ce, #3bfb53)',
      padding: '10px',
      boxSizing: 'border-box',
      borderRadius: '5px',
      pointerEvents: 'none'
    },
  },
  inputTextField: {
    '& + fieldset': {
      borderColor: 'transparent',
      backgroundColor: 'white',
      margin: '2px'
    },
    '&:focus + fieldset': {
      borderColor: 'transparent !important',
    }
  },
  link: {
    color: '#61bb61'
  },
  checkbox: {
    '& .MuiSvgIcon-root': {
      fill: '#61bb61'
    }
  }
}));

export default function SignIn() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <main className={classes.container}>
        <div className={classes.image}>
          <Typography 
            variant="h5">
            Comparte tu conocimiento al mundo. Vive el curso.     
          </Typography>
        </div>
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Inicia Sesión
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              classes={{
                root: classes.rootTextField
              }}
              inputProps={{
                className: classes.inputTextField
              }}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              classes={{
                root: classes.rootTextField
              }}
              inputProps={{
                className: classes.inputTextField
              }}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox className={classes.checkbox} value="remember" color="primary" />}
              label="Remember me"
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
            <Grid container>
              <Grid item xs>
                <Link 
                  className={classes.link}
                  href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link 
                  className={classes.link}
                  href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </main>
    </div>
  );
}