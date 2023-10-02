import css from "./Button.module.scss";
import PropTypes from "prop-types";

const Button = ({
  onClick,
  name,
  text,
  className = css.button,
  type = "button",
}) => {
  return (
    <button onClick={onClick} name={name} className={className} type={type}>
      {text}
    </button>
  );
};

export default Button;

Button.propTypes = {
  onClick: PropTypes.func,
  name: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
};
