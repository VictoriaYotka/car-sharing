import { NavLink } from "react-router-dom";
import css from "./Header.module.scss";

const Header = () => {
  return (
    <header className={css.header}>
      <span className={css.logo}>
        Car <span className={css.logo_part}>Sharing</span>
      </span>
      <nav className={css.nav}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/cars">Cars</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
      </nav>
    </header>
  );
};

export default Header;
