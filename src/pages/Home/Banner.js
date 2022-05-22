import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from "../../utilities/banner-02.jpg";
import img2 from "../../utilities/banner-1.jpg";
import img3 from "../../utilities/banner-3.png";
import img4 from "../../utilities/banner-5.jpg";

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
    <div className="px-7 bg-slate-300">
      <Slider {...settings}>
        <div>
          <img src={img1} alt="" className="mx-auto w-full h-[320px]" />
        </div>
        <div>
          <img src={img2} alt="" className="mx-auto w-full h-[320px]" />
        </div>
        <div>
          <img src={img3} alt="" className="mx-auto w-full h-[320px]" />
        </div>
        <div>
          <img src={img4} alt="" className="mx-auto w-full h-[320px]" />
        </div>
        <div>
          <img src={img2} alt="" className="mx-auto w-full h-[320px]" />
        </div>
        <div>
          <img src={img1} alt="" className="mx-auto w-full h-[320px]" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
