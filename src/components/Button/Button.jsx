import css from "./Button.module.scss";
import PropTypes from "prop-types";

const Button = ({ onClick, name, text, className = css.button }) => {
  return (
    <button onClick={onClick} name={name} className={className}>
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
};
