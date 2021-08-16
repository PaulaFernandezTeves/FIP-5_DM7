import { makeStyles } from '@material-ui/core/styles'
export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
          margin: theme.spacing(1),
          width: theme.spacing(16),
          height: theme.spacing(40),
        },
      },
    paper: {
        padding: '0 2em',
        width: '250px',
        //height: '406px',
        display: 'flex',
        flexDirection: 'column',
        //alignContent: 'center',
        //justifyContent: 'center',
        marginTop: '-3em',
        marginBottom: '5em',
        background: '#fff',
        zIndex: '10',
        borderRadius: '10px',

    },
    paperLetter: {
        display: 'flex',
        alignSelf: 'center',
        justifySelf: 'center',
    },
    title: {
        fontWeight: 'bolder',
        fontSize: '20px',
        textStroke: '0.2px rgba(0, 0, 0, 0.5)'
    },
    description: {
        marginTop: '1em',
        fontSize: '14px',
        textStroke: '0.6px #000',

    },
    img: {
       // marginTop: '1em',
        width: '30%',
        margin: ' 1em 0 1.5em 0',
    },
}))