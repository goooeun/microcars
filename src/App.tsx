import Header from "./containers/Header";
import "./App.scss";
import MainSlider from "./containers/MainSlider";
import { ICar } from "./types/Car";

const carList: ICar[] = [
  {
    name: "CINQUECENTO",
    imageName: "fiatCinquecento",
    companyName: "FIAT",
    countryOfProduction: "ITALY",
    YearOfProduction: "1991–1998",
    description:
      "The Fiat Cinquecento (Type 170) is a front engine front-wheel-drive, four passenger, three door hatchback city car manufactured and marketed by Fiat from 1991 to 1998 over a single generation.",
  },
  {
    name: "BEETLE",
    imageName: "volkswagenBeetle",
    companyName: "VOLKSWAGEN",
    countryOfProduction: "BERLIN, GERMANY",
    YearOfProduction: "	1938–2003",
    description:
      "The Volkswagen Beetle, officially the Volkswagen Type 1 is a small car produced by the German company Volkswagen from 1938 to 2003",
  },
  {
    name: "ISETTA",
    imageName: "bmwIsetta",
    companyName: "BMW",
    countryOfProduction: "ITALY",
    YearOfProduction: "1955-1962",
    description:
      "The Isetta is an Italian-designed microcar built under license in a number of different countries, including Argentina, Spain, Belgium, France, Brazil, Germany and the United Kingdom.",
  },
];

const App = () => {
  return (
    <div className="main">
      <Header />
      <MainSlider carList={carList} />
    </div>
  );
};

export default App;
