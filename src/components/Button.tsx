import "./Button.scss";

type Props = {
  title: string;
  handleClick: () => void;
};

const Button: React.FC<Props> = ({ title, handleClick }) => {
  return (
    <button className="button" type="button" onClick={handleClick}>
      {title}
    </button>
  );
};

export default Button;
