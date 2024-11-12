import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef, useState } from "react";
import "./MainSlider.scss";
import Car from "../components/Car";
import { ICar } from "../types/Car";
import Modal from "../components/Modal";

type Props = {
  carList: ICar[];
};

const MainSlider: React.FC<Props> = ({ carList }) => {
  const [activeCar, setActiveCar] = useState<ICar>(carList[1]);
  const sliderRef = useRef<Slider>(null);
  const next = () => {
    if (sliderRef.current) sliderRef.current.slickNext();
  };
  const previous = () => {
    if (sliderRef.current) sliderRef.current.slickPrev();
  };

  const settings = {
    initialSlide: 1,
    dots: true,
    infinity: true,
    fade: true,
    nextArrow: <></>,
    prevArrow: <></>,
    appendDots: (dots: any) => <ul className="dot-wrapper">{dots}</ul>,
    customPaging: () => <div className="dot"></div>,
    beforeChange: (current: number, next: number) => {
      setActiveCar(carList[next]);
    },
  };
  const handleWheel = (e: WheelEvent) => {
    if (e.deltaY > 0) previous();
    else next();
  };
  useEffect(() => {
    window.addEventListener("wheel", handleWheel);
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <div className={`slider-container ${activeCar.companyName}`}>
        <Slider className="slider" ref={sliderRef} {...settings}>
          {carList.map((car) => {
            return (
              <Car
                car={car}
                isActive={car.companyName === activeCar.companyName}
                key={car.name}
                handleModal={(isOpen) => setIsModalOpen(isOpen)}
              />
            );
          })}
        </Slider>
      </div>
      <Modal
        isOpen={isModalOpen}
        info={activeCar}
        handleModalClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default MainSlider;
