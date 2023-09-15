import { selectCars } from "../../redux/selectors/selectors";
import CarsList from "../../components/CarsList/CarsList";

const Cars = () => {
  return <CarsList selector={selectCars} />;
};

export default Cars;
