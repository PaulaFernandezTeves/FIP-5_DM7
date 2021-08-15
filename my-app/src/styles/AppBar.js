import { makeStyles } from '@material-ui/core/styles'
export const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },
      paper: {
        marginRight: theme.spacing(2),
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
        color: '#29BA83',
        fontFamily: 'Poppins, sans-serif',
        fontStyle: 'italic',
        fontSize: '35px',
        fontWeight: '600',
        letterSpacing: '0.020em',
        ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: '25px',
        },
        ['@media (max-width:414px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: '18px'      
        },
    
      },
      logo: {
        width: '50px',
        marginRight: '10px',
        ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
            width: '30px',
        },
        ['@media (max-width:414px)']: { // eslint-disable-line no-useless-computed-key
            width: '25px',
        },
      },
      appBar: {
        backgroundColor: '#fff',
      },
      btnAppBar: {
        color: '#5C5C5C',
        fontFamily: 'Roboto, sans-serif',
        fontStyle: 'normal',
        fontWeight: '900',
        fontSize: '14px',
        letterSpacing: '0.04em',
        textTransform: 'uppercase',
        marginLeft: '45px',
        '&:hover': {
            color: "#33C6E8",
          },
        ['@media (max-width:835px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: '12px',
        },
        ['@media (max-width:795px)']: { // eslint-disable-line no-useless-computed-key
            display: 'none',
        },
      },
      btnSoyAsesor: {
        background: '#3CDBA0',
        color: '#fff',
        padding: '6px 29px',
        borderRadius: '10px',
        '&:hover': {
            background: "#33C6E8",
            color: '#fff'
        }
      },
      MenuOpen: {
        display: 'none',    
        ['@media (max-width:795px)']: { // eslint-disable-line no-useless-computed-key
            display: 'block',
        },   
      },
      Popper: {
        marginRight: '60px',
      },
      btnMenu: {
        color: '#5C5C5C',
        fontFamily: 'Roboto, sans-serif',
        fontStyle: 'normal',
        fontWeight: '900',
        letterSpacing: '0.04em',
        textTransform: 'uppercase',
        '&:hover': {
            color: "#33C6E8",
          }
      },
      btnSoyAsesorMenu: {
        background: '#3CDBA0',
        color: '#fff',
        padding: '',
        borderRadius: '10px',
        display: 'flex',
        alignCenter: 'center',
        justifyContent: 'center',
        '&:hover': {
            background: "#33C6E8",
            color: '#fff'
          }
      },
      MenuOpenIcon: {
        marginRight: '-40px',
      },
}))