import { ICar } from "../types/Car";
import Button from "./Button";
import "./Car.scss";

type Props = {
  car: ICar;
  isActive: boolean;
};

const Car: React.FC<Props> = ({ car, isActive }) => {
  return (
    <div className="car">
      <div className="info">
        <div className="top">
          <div className="country">{car.countryOfProduction}</div>
          <div className="year">{car.YearOfProduction}</div>
        </div>
        <div className="car-name">
          {car.companyName} {car.name}
        </div>
        <img
          className={`car-image ${isActive ? "active" : ""}`}
          src={`/images/${car.imageName}.png`}
          alt={car.name}
        />
      </div>
      <div className="description">{car.description}</div>
      <Button title="DISCOVER MORE" />
    </div>
  );
};

export default Car;
