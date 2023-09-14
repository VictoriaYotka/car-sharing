import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/cars">Cars</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
      </nav>
    </header>
  );
};

export default Header;
