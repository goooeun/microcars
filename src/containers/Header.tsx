import "./Header.scss";
import { Bars3Icon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <div className="header">
      <Bars3Icon className="icon" />
      <h3>CLASSIC MICROCARS</h3>
      <MagnifyingGlassIcon className="icon" />
    </div>
  );
};

export default Header;
