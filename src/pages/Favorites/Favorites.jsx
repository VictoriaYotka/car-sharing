import { selectFavoriteCars } from "../../redux/selectors/selectors";
import CarsList from "../../components/CarsList/CarsList";

const Favorites = () => {
  return <CarsList selector={selectFavoriteCars} />;
};

export default Favorites;
