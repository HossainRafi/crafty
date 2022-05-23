import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from "../../utilities/banner1.jpg";
import img2 from "../../utilities/banner2.jpg";
import img3 from "../../utilities/banner3.jpg";
import img4 from "../../utilities/banner4.jpg";
import img5 from "../../utilities/banner5.jpg";
import img6 from "../../utilities/banner6.jpg";

const settings = {
  dots: false,
  fade: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear",
};

const Carousel = () => {
  return (
    <div className="px-7">
      <Slider {...settings}>
        <div>
          <img src={img1} alt="" className="mx-auto w-full h-[350px]" />
        </div>
        <div>
          <img src={img2} alt="" className="mx-auto w-full h-[350px]" />
        </div>
        <div>
          <img src={img3} alt="" className="mx-auto w-full h-[350px]" />
        </div>
        <div>
          <img src={img4} alt="" className="mx-auto w-full h-[350px]" />
        </div>
        <div>
          <img src={img5} alt="" className="mx-auto w-full h-[350px]" />
        </div>
        <div>
          <img src={img6} alt="" className="mx-auto w-full h-[350px]" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
