import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { updateFavorite } from "../../redux/operations/carsOperations";
import CarCard from "../CarCard/CarCard";
import PropTypes from "prop-types";

const CarsList = ({ selector }) => {
  const cars = useSelector(selector, shallowEqual);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    if (e.target.name === "openModal" || e.target.name === "updateFavorite") {
      const { id } = e.target.closest("li");

      if (e.target.name === "openModal") {
        console.dir(e.target.name);
      }

      if (e.target.name === "updateFavorite") {
        let carToUpdateFavorite = cars.find((car) => car.id === id);
        const { isFavorite } = carToUpdateFavorite;
        carToUpdateFavorite = {
          ...carToUpdateFavorite,
          isFavorite: !isFavorite,
        };

        dispatch(updateFavorite(carToUpdateFavorite));
      }
    }
  };

  return (
    <ul onClick={handleClick}>
      {cars.map((car) => {
        const {
          id,
          isFavorite,
          year,
          make,
          model,
          type,
          img,
          photoLink,
          functionalities,
          rentalPrice,
          rentalCompany,
          address,
          mileage,
        } = car;
        const [functionality] = functionalities;
        const [, city, country] = address.split(",");

        return (
          <li key={id} id={id}>
            <CarCard
              isFavorite={isFavorite}
              img={img || photoLink}
              year={year.toString()}
              make={make}
              model={model}
              rentalPrice={rentalPrice}
              city={city}
              country={country}
              rentalCompany={rentalCompany}
              type={type}
              mileage={mileage.toString()}
              functionality={functionality}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default CarsList;

CarsList.propTypes = {
  selector: PropTypes.func,
};
