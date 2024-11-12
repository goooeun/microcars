import { XMarkIcon } from "@heroicons/react/24/outline";
import "./Modal.scss";
import { ICar } from "../types/Car";
import Slider from "react-slick";

type Props = {
  isOpen: boolean;
  info: ICar;
  handleModalClose: () => void;
};

const Modal: React.FC<Props> = ({ isOpen, handleModalClose, info }) => {
  const infoImages = info.companyName === "bmw" ? [1, 2, 3] : [1, 2];
  const settings = {
    dots: true,
    infinity: true,
    nextArrow: <></>,
    prevArrow: <></>,
  };

  return (
    <div className={`modal-wrapper ${isOpen ? "open" : ""}`}>
      <div className="modal">
        <button
          className="modal-close-botton"
          type="button"
          onClick={() => handleModalClose()}
        >
          <XMarkIcon className="x-icon" />
        </button>
        <div className="content">
          <div className="title">
            <img
              className="company-logo"
              src={`/images/logo/${info.companyName}.svg`}
              alt={info.companyName}
            />
            <div className="car-name">
              {info.companyName.toUpperCase()} {info.name.toUpperCase()}
            </div>
          </div>
          <div className="article">
            <Slider {...settings}>
              {infoImages.map((image) => {
                return (
                  <img
                    className="car-image"
                    src={`/images/cars/${info.companyName}/${image}.jpg`}
                    alt={info.companyName + image}
                    key={info.companyName + image}
                  />
                );
              })}
            </Slider>
            <div className="description">{info.description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
