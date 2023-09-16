import { shallowEqual, useSelector } from "react-redux";
import CarCard from "../CarCard/CarCard";
import css from "./CarsList.module.scss";
import PropTypes from "prop-types";

const CarsList = ({ selector }) => {
  const cars = useSelector(selector, shallowEqual);

  return (
    <ul className={css.list}>
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
          <li key={id} id={id} className={css.item}>
            <CarCard
              selector={selector}
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
