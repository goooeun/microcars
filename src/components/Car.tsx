import { ICar } from "../types/Car";
import Button from "./Button";
import "./Car.scss";

type Props = {
  car: ICar;
  isActive: boolean;
  handleModal: (isOpen: boolean) => void;
};

const Car: React.FC<Props> = ({ car, isActive, handleModal }) => {
  const upperCarName = car.name ? car.name.toUpperCase() : "";
  const upperCompanyName = car.companyName ? car.companyName.toUpperCase() : "";
  return (
    <div className="car">
      <div className="info">
        <div className="top">
          <div className="country">{car.countryOfProduction}</div>
          <div className="year">{car.YearOfProduction}</div>
        </div>
        <div className="car-name">
          {upperCompanyName} {upperCarName}
        </div>
        <img
          className={`car-image ${isActive ? "active" : ""}`}
          src={`/images/cars/${car.imageName}.png`}
          alt={car.name}
        />
      </div>
      <div className="description">{car.shortDescription}</div>
      <Button title="DISCOVER MORE" handleClick={() => handleModal(true)} />
    </div>
  );
};

export default Car;
