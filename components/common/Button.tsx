import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({
  buttonName,
  buttonStyles,
  onClick,
}) => {
  return (
    <button className={buttonStyles} onClick={onClick}>
      {buttonName}
    </button>
  );
};

export default Button;
