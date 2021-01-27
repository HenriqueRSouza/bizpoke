import React from "react";

import ImageSlider from '../Slider/ImageSlider';
import { SliderData } from '../Slider/SliderData';

import './Images.css';

function Images(){
  return(
    <div className="images-container">
      <div className="text-image">
        <h1>Empresas que utlizam o método movilizer?</h1>
      <div className="Slider">
        <ImageSlider slides={SliderData}/>
      </div>
      </div>
    </div>
  );
}
export default Images;