import React from 'react';
import {useStyles} from '../styles/Home.js';
import { Typography, } from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';




export default function Home() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.SliderBackground}>
        <section className={classes.Slider}>
          <Container fixed className={classes.Container}>
            <Typography variant= 'h2' className={`${classes.Slidermain} ${classes.SliderTitle}`}>
              Contacte un asesor
            </Typography>
            <Typography variant='h4' className={`${classes.Slidermain} ${classes.SliderSubTitle}`}>
              para una mayor expansión
            </Typography>
            <Typography className={`${classes.Slidermain} ${classes.SliderSubTitle2}`}>
              Emprender es un viaje de toda una vida.<br/>
              Deja de buscar, disfruta del proceso.
            </Typography>
            <div className={classes.Buttons}>
              <Button className={`${classes.ButtonsLetter} ${classes.ButtonsStyleSignUp}`}>
                Regístrate aquí
              </Button>
              <Button className={`${classes.ButtonsLetter} ${classes.ButtonsStyleMoreInfo}`}>
                Más información
              </Button>
            </div>
            <div className={classes.selectImage}>
              <svg height="65" width="65">
                <circle cx="50" cy="50" r="10" stroke="#fff" stroke-width="2" fill="#fff" />
              </svg>
              <svg height="65" width="65">
                <circle cx="50" cy="50" r="10" stroke="#fff" stroke-width="2" fill="none" />
              </svg>
              <svg height="65" width="65">
                <circle cx="50" cy="50" r="10" stroke="#fff" stroke-width="2" fill="none" />
              </svg>
            </div>
          </Container>
        </section>
      </div>
    </>
  );
}