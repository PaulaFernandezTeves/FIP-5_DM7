import React from 'react';
import {useStyles} from '../../styles/Home/Home.js';
import SliderHome from './Slider';
import SliderMain from './SliderMain';


export default function Home() {
  const classes = useStyles();

  return (
    <>
      <SliderHome/>
      <SliderMain/>
    </>
  );
}