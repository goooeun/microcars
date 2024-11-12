import { useState } from "react";
import "./MenuIcon.scss";

type Props = {
  handleClick: () => void;
};

const MenuIcon: React.FC<Props> = ({ handleClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="menu-button" onClick={handleMenuClick}>
      <div className={`menu-icon ${isOpen ? "open" : ""}`}></div>
    </div>
  );

  function handleMenuClick() {
    setIsOpen(!isOpen);
    handleClick();
  }
};

export default MenuIcon;
