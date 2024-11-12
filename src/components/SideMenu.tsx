import "./SideMenu.scss";

type Props = {
  isOpen: boolean;
  handleMenuClick: (activeNum: number) => void;
};

const SideMenu: React.FC<Props> = ({ isOpen, handleMenuClick }) => {
  return (
    <div className={`side-menu ${isOpen ? "open" : ""}`}>
      <ul>
        <li>
          <button type="button" onClick={() => handleMenuClick(0)}>
            <img src={`/images/logo/fiat.svg`} alt="fiat" />
          </button>
        </li>
        <li>
          <button type="button" onClick={() => handleMenuClick(1)}>
            <img src={`/images/logo/volkswagen.svg`} alt="volkswagen" />
          </button>
        </li>
        <li>
          <button type="button" onClick={() => handleMenuClick(2)}>
            <img src={`/images/logo/bmw.svg`} alt="bmw" />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;
