import React from 'react';
import {useStyles} from '../../styles/Home/Main.js';
import { Typography, } from '@material-ui/core/';
import Container from '@material-ui/core/Container';
import Video from '../../images/Home/imageVideo.png'

export default function SliderHome() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
          <img
          src={Video}
          alt='Video explicación : Qué es Practica.pe'
          className={classes.img}
          />
        <Container className={classes.Container}>
            <Typography className={classes.title}>
                ¿Qué es Practica.pe?
            </Typography>
            <Typography className={classes.description}>
                Es un programa de formación para estudiantes universitarios y técnicos con el objetivo de que encuentren prácticas profesionales, a la vez ayudar a las MYPES con propuestas de mejora en función a los cursos  
            </Typography>
        </Container>
      </div>
    </>
  );
}