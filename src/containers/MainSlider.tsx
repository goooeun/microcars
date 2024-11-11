import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import "./MainSlider.scss";
import Car from "../components/Car";
import { ICar } from "../types/Car";

type Props = {
  carList: ICar[];
};

const MainSlider: React.FC<Props> = ({ carList }) => {
  const [activeSlide, setActiveSlide] = useState("fiat");
  const settings = {
    dots: true,
    Infinity: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <></>,
    prevArrow: <></>,
    appendDots: (dots: any) => <ul className="dot-wrapper">{dots}</ul>,
    customPaging: () => <div className="dot"></div>,
    beforeChange: (current: number, next: number) => {
      const backgroundColor =
        next === 0 ? "fiat" : next === 1 ? "bmw" : "volkswangen";
      setActiveSlide(backgroundColor);
    },
  };
  return (
    <div className={`slider-container ${activeSlide}`}>
      <Slider className="slider" {...settings}>
        {carList.map((car) => {
          return <Car car={car} key={car.name} />;
        })}
      </Slider>
    </div>
  );
};

export default MainSlider;
