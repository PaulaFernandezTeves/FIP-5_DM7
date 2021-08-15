import { makeStyles } from '@material-ui/core/styles'
export const useStyles = makeStyles((theme) => ({
  Slider: {
    backgroundImage:
    `url(https://images.unsplash.com/photo-1607969892435-1063b49bc963?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80)`,
    height:'100vh',
    backgroundPosition: 'center', /* Center the image */
    backgroundRepeat: 'no-repeat', /* Do not repeat the image */
    backgroundSize: 'cover',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    /* Apply multiple filters */
    filter: 'opacity(92%) hue-rotate(0deg)',
      '&::before': {
        content: '""',
        background: 'rgb(69,87,112,0.4)',
        height:'100vh',
        width: '100%',
        minHeight: '100vh',
        position: 'absolute',
        zIndex: '-1',
      }
  },
  Container:{
    marginTop: '3em',
  },
  Slidermain: {
    fontFamily: 'Poppins, sans-serif',
    paddingLeft: '10px',
    texAlign: 'right',
  },
  SliderTitle:{
    fontWeight: 'bold',
    alignItems: 'center',
    fontSize: '70px',
    marginBottom: '5px',
    ['@media (max-width:960px)']: { // eslint-disable-line no-useless-computed-key
      fontSize: '3em',
    },
    ['@media (max-width:550px)']: { // eslint-disable-line no-useless-computed-key
      fontSize: '2em',
    },
    ['@media (max-width:414px)']: { // eslint-disable-line no-useless-computed-key
      fontSize: '1.2em',
    },
  },
  SliderSubTitle:{
    fontWeight: 'normal',
    color: '#3CDBA0',
    fontSize: '40px',
    marginBottom: '2em',
    textStroke: '1px #3CDBA0',
    ['@media (max-width:960px)']: { // eslint-disable-line no-useless-computed-key
      fontSize: '25px',
    },
    ['@media (max-width:550px)']: { // eslint-disable-line no-useless-computed-key
      fontSize: '15px',
    },
    ['@media (max-width:414px)']: { // eslint-disable-line no-useless-computed-key
      fontSize: '11px',
    },
  },
  SliderSubTitle2:{
    fontSize: '20px',
    fontWeight: '0',
    textStroke: '0.5px #fff',
    marginBottom: '1.5em',
    ['@media (max-width:960px)']: { // eslint-disable-line no-useless-computed-key
      fontSize: '15px',
    },
    ['@media (max-width:550px)']: { // eslint-disable-line no-useless-computed-key
      fontSize: '10px',
    },
    ['@media (max-width:414px)']: { // eslint-disable-line no-useless-computed-key
      fontSize: '8px',
    },
  },
  Buttons: {
    marginLeft: '30px'
  },
  ButtonsLetter: {
      color: '#fff',
      textTransform: 'unset',
      fontSize:'20px',  
      //letterSpacing: '0.06em',
      border: '2px solid #3CDBA0',
      //boxSizing: 'border-box',
      borderRadius: '8px',
      marginRight: '33px',
      padding: '10px 23px',
      marginBottom: '1em',
      ['@media (max-width:960px)']: { // eslint-disable-line no-useless-computed-key
        fontSize: '15px',
      },
      ['@media (max-width:550px)']: { // eslint-disable-line no-useless-computed-key
        fontSize: '10px',
      },
      ['@media (max-width:414px)']: { // eslint-disable-line no-useless-computed-key
        fontSize: '8px',
      },  
  },
  ButtonsStyleSignUp: {
    background: '#3CDBA0'
  },
  selectImage: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
  }

}))