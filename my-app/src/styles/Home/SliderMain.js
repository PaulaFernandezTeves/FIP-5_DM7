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
        ['@media (max-width:1005px)']: { // eslint-disable-line no-useless-computed-key
            padding: '0 1em',
        },
        ['@media (max-width:910px)']: { // eslint-disable-line no-useless-computed-key
            padding: '0 0.5em',
        },
        ['@media (max-width:865px)']: { // eslint-disable-line no-useless-computed-key
            padding: ' 0',
        },
        ['@media (max-width:820px)']: { // eslint-disable-line no-useless-computed-key
            width: '230px',
        },
        ['@media (max-width:755px)']: { // eslint-disable-line no-useless-computed-key
            width: '210px',
        },
        ['@media (max-width:697px)']: { // eslint-disable-line no-useless-computed-key
            width: '200px',
        },
        ['@media (max-width:664px)']: { // eslint-disable-line no-useless-computed-key
            width: '180px',
        }



    },
    paperLetter: {
        display: 'flex',
        alignSelf: 'center',
        justifySelf: 'center',
    },
    title: {
        fontWeight: 'bolder',
        fontSize: '20px',
        textStroke: '0.2px rgba(0, 0, 0, 0.5)',
        ['@media (max-width:865px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: '15px',
        },

    },
    description: {
        marginTop: '1em',
        fontSize: '14px',
        textStroke: '0.6px #000',
        ['@media (max-width:865px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: '12px',
            maxWidth: '80%',
        },
        ['@media (max-width:820px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: '12px',
            maxWidth: '70%',
        },
        ['@media (max-width:697px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: '10.6px',
        },
        ['@media (max-width:664px)']: { // eslint-disable-line no-useless-computed-key
            maxWidth: '80%',
            fontSize: '10px',
        }
    },
    img: {
       // marginTop: '1em',
        width: '30%',
        height: '24%',
        margin: ' 1em 0 1.5em 0',
        ['@media (max-width:820px)']: { // eslint-disable-line no-useless-computed-key
            width: '25%',
            height: '21%',
        },
        ['@media (max-width:697px)']: { // eslint-disable-line no-useless-computed-key
            width: '26%',
            height: '19%',
        },
        ['@media (max-width:664px)']: { // eslint-disable-line no-useless-computed-key
            width: '26%',
            height: '16%',
        }


    },
}))