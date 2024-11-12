import Header from "./containers/Header";
import "./App.scss";
import MainSlider from "./containers/MainSlider";
import { ICar } from "./types/Car";
import { CarList } from "./config/carList";
import SideMenu from "./components/SideMenu";
import { useState } from "react";

const carList: ICar[] = CarList;

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(1);

  return (
    <div className="main">
      <Header handleSideMenu={() => setIsOpen(!isOpen)} />
      <SideMenu
        isOpen={isOpen}
        handleMenuClick={(activeNum) => setActiveSlide(activeNum)}
      />
      <MainSlider activeSlide={activeSlide} carList={carList} />
    </div>
  );
};

export default App;
