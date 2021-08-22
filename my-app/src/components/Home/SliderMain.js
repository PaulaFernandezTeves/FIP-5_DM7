import React from 'react';
import {useStyles} from '../../styles/Home/SliderMain.js';
import Paper from '@material-ui/core/Paper';
import { Typography, } from '@material-ui/core/';
import MypeIcon from '../../images/Home/mype.png';
import Foro from '../../images/Home/foro.png';
import Asesores from '../../images/Home/asesores.png';




export default function SliderMain() {
  const classes = useStyles();

  return (
    <>
        <div className={classes.root}>
            <Paper elevation={3} className={classes.paper}>
                <img 
                   src={MypeIcon}
                    alt='Icono imagen pequeño negocio, Mype' 
                    className={`${classes.paperLetter} ${classes.img}`}
                />
                <Typography className={`${classes.paperLetter} ${classes.title}`}>
                    ¿A quién buscamos?
                </Typography>
                <Typography className={`${classes.paperLetter} ${classes.description}`}>
                    Buscamos negocios con ganas de expandirse y que esten interesados en descubrir nuevos talentos. <br/>
                    Nuestros postulantes deben ser apasionados de nuevos retos, dispuestos de ofrecer siempre un gran servicio.
                </Typography>            
            </Paper>
            <Paper elevation={3} className={classes.paper}>
                <img 
                   src={Foro}
                    alt='Icono imagen pequeño negocio, Mype' 
                    className={`${classes.paperLetter} ${classes.img}`}
                />
                <Typography className={`${classes.paperLetter} ${classes.title}`}>
                    Foros de apoyo
                </Typography>
                <Typography className={`${classes.paperLetter} ${classes.description}`}>
                    Contamos con un Foro donde puden realizar sus dudas y la comunidad del programa ayudarán a resolver sus dudas.
                </Typography>            
            </Paper>
            <Paper elevation={3} className={classes.paper}>
                <img 
                    src={Asesores}
                    alt='Icono imagen pequeño negocio, Mype' 
                    className={`${classes.paperLetter} ${classes.img}`}
                />                <Typography className={`${classes.paperLetter} ${classes.title}`}>
                    Asesores
                </Typography>
                <Typography className={`${classes.paperLetter} ${classes.description}`}>
                    Brindamos talleres de formación a los asesores para mejorar la experencia de resultados en los proyectos de cada empresa.
                </Typography>            
            </Paper>
        </div>
    </>
  );
}