import { ICar } from "../types/Car";
import "./Car.scss";

type Props = {
  car: ICar;
};

const Car: React.FC<Props> = ({ car }) => {
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
          className="car-image"
          src={`/images/${car.imageName}.png`}
          alt={car.name}
        />
      </div>
      <div className="description">{car.description}</div>
    </div>
  );
};

export default Car;
