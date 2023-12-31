import { NavLink } from "react-router-dom";
import css from "./NotFound.module.scss";
import Button from "../../components/Button/Button";

const NotFound = () => {
  return (
    <div className={css.wrapper}>
      <img
        className={css.image}
        src="https://images.pexels.com/photos/1213294/pexels-photo-1213294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Car sharing illustration"
      />
      <p className={css.paragr}>
        Oops, something went wrong and we cannot show you any car...
      </p>
      ;
      <NavLink to="/">
        <Button text="Go to start page" />
      </NavLink>
    </div>
  );
};

export default NotFound;
