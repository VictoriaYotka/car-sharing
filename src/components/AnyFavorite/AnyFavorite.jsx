import { NavLink } from "react-router-dom";
import css from "./AnyFavorite.module.scss";
import Button from "../Button/Button";

const AnyFavorite = () => {
  return (
    <div className={css.wrapper}>
      <img
        className={css.image}
        src="https://images.pexels.com/photos/1213294/pexels-photo-1213294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Car sharing illustration"
      />
      <p className={css.paragr}>Oops, there is still nothing here...</p>;
      <NavLink to="/cars">
        <Button text="Start now" />
      </NavLink>
    </div>
  );
};

export default AnyFavorite;
