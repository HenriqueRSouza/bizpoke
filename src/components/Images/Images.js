import React from "react";
import Img from "../assets/images/img-2.jpg";
import Img1 from "../assets/images/img-3.jpg";
import Img2 from "../assets/images/img-4.jpg";
import Img3 from "../assets/images/img-5.jpg";
import Img4 from "../assets/images/img-6.jpg";

import './Images.css';

function Images(){
  return(
    <div className="images-container">
      <div className="text-image">
          <h1>Quem utiliza Movilizer ?</h1>

          <img src={Img}></img>
          <img src={Img1}></img>
          <img src={Img2}></img>
          <img src={Img3}></img>
          <img src={Img4}></img>
      </div>
    </div>
  );
}
export default Images;