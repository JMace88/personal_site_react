import React from "react";
import Slider from "react-slick";
import './styles/about.css'

function Gallery() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="gallery">
      <Slider {...settings}>
        <div className="photo-div">
        <img src='/src/assets/images/drwhocast.jpg' alt='' />
        </div>
        <div className="photo-div">
        <img src='/src/assets/images/withfelicia.jpg' alt='' />
        </div>
        <div className="photo-div">
        <img src='/src/assets/images/withtakei.jpg' alt='' />
        </div>
        <div className="photo-div">
        <img src='/src/assets/images/withgoldblum.jpg' alt='' />
        </div>
        <div className="photo-div">
        <img src='/src/assets/images/withamya.jpg' alt='' />
        </div>
        <div className="photo-div">
        <img src='/src/assets/images/wthdrwo2.jpg' alt='' />
        </div>
      </Slider>
    </div>
  );
}

export default Gallery;