import { makeStyles } from '@material-ui/core/styles'
export const useStyles = makeStyles((theme) => ({
    root: {
        background: '#3CDBA0',
        padding: '20px',
        display: 'flex',
        flexFlow: 'row nowrap',
        ['@media (max-width:1200px)']: { // eslint-disable-line no-useless-computed-key
            flexFlow: 'row wrap',
        },      
    },
    img: {
        width: '100%',
        height: '100%',
    },
    Container:{
        display: 'flex',
        flexDirection: 'column',
        align: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '0 60px',
        ['@media (max-width:590px)']: { // eslint-disable-line no-useless-computed-key
            padding: '0 30px',
        },
        ['@media (max-width:520px)']: { // eslint-disable-line no-useless-computed-key
            padding: '0 0',
        },


    },
    title: {
        textAlign: 'center',
        fontWeight: 'bolder',
        fontStyle: 'normal',
        fontSize: '50px',
        lineHeight: '64px', 
        color: '#04140E' ,
        textStroke: '0.1px #04140E',
        ['@media (max-width:1200px)']: { // eslint-disable-line no-useless-computed-key
            marginTop: '1em',
        },
        ['@media (max-width:830px)']: { // eslint-disable-line no-useless-computed-key
            marginTop: '0.6em',
            fontSize: '45px',
        },
        ['@media (max-width:670px)']: { // eslint-disable-line no-useless-computed-key
            marginTop: '0.3em',
            fontSize: '35px',
        },
        ['@media (max-width:515px)']: { // eslint-disable-line no-useless-computed-key
            marginTop: '0.1em',
            fontSize: '25px',
        },
        ['@media (max-width:413px)']: { // eslint-disable-line no-useless-computed-key
            marginTop: '-10px',
            fontSize: '20px',
        },
        ['@media (max-width:360px)']: { // eslint-disable-line no-useless-computed-key
            marginTop: '10px',
            fontSize: '25px',
        },
        ['@media (max-width:320px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: '18px',
            marginTop: '-3px',
        },
    },
    description: {
        marginTop: '1.5em',
        color: '#00202E',
        fontStyle: 'light',
        fontWeight: 'light',
        fontSize: '25px',
        textAlign: 'start',
        ['@media (max-width:830px)']: { // eslint-disable-line no-useless-computed-key
            marginTop: '0.6em',
            fontSize: '20px',
        },
        ['@media (max-width:670px)']: { // eslint-disable-line no-useless-computed-key
            marginTop: '0.3em',
            fontSize: '15px',
        },
        ['@media (max-width:515px)']: { // eslint-disable-line no-useless-computed-key
            marginTop: '0.1em',
            fontSize: '12px',
        },
        ['@media (max-width:360px)']: { // eslint-disable-line no-useless-computed-key
            marginTop: '-5px',
            fontSize: '12px',
        },
        ['@media (max-width:320px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: '10px',
            marginTop: '-10px',
        },
    },
}))