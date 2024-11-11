import "./Button.scss";

type Props = {
  title: string;
};

const Button: React.FC<Props> = ({ title }) => {
  return <button type="button">{title}</button>;
};

export default Button;
