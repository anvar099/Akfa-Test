import React from "react";
import "./styles.css";

import Image1 from "../../assets/images/imageone.jpg";
import Image2 from "../../assets/images/imagetwo.jpg";
import Image3 from "../../assets/images/imagethree.jpg";
import Image4 from "../../assets/images/imagefour.jpg";
import Image5 from "../../assets/images/imagefive.jpg";
import Slider from "react-slick";

const Subtitle = () => {
  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div style={{position:"relative"}}>
      <div>
        <div className="horyzontal-line"></div>
        <div className="subtitle-row">
          <div className="heading-large">
            Максимально широкий ассортимент продукции
          </div>
          <div className="heading-small">
            «Akfagroup» стремится предоставить килентам максимально широкий
            ассортимерт продукции. Мы проектируем, производим и монтируем
            множество изделий.
          </div>
        </div>
      </div>

      <div className="slider">
      <div className="vertical-mode-slider">Направления производство</div>
      <div className="vertical-line-slider"></div>
        <Slider {...settings}>
          <div className="slide-box">
            <img className="slider-img" src={Image1} alt="Image1" />
          </div>
          <div className="slide-box">
            <img className="slider-img" src={Image2} alt="Image2" />
          </div>
          <div className="slide-box">
            <img className="slider-img" src={Image3} alt="Image3" />
          </div>
          <div className="slide-box">
            <img className="slider-img" src={Image4} alt="Image4" />
          </div>
          <div className="slide-box">
            <img className="slider-img" src={Image5} alt="Image5" />
          </div>
        </Slider>
      </div>
    </div>
  );
};
export default Subtitle;
