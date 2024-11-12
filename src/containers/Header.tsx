import MenuIcon from "../components/MenuIcon";
import "./Header.scss";

type Props = {
  handleSideMenu: () => void;
};

const Header: React.FC<Props> = ({ handleSideMenu }) => {
  return (
    <>
      <div className="header">
        <h3>CLASSIC MICROCARS</h3>
      </div>
      <MenuIcon handleClick={handleSideMenu} />
    </>
  );
};

export default Header;
