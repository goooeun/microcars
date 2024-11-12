import Header from "./containers/Header";
import "./App.scss";
import MainSlider from "./containers/MainSlider";
import { ICar } from "./types/Car";
import { CarList } from "./config/carList";

const carList: ICar[] = CarList;

const App = () => {
  return (
    <div className="main">
      <Header />
      <MainSlider carList={carList} />
    </div>
  );
};

export default App;
