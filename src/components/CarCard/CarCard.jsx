import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { updateFavorite } from "../../redux/operations/carsOperations";
import icons from "../../images/icons.svg";
import css from "./CarCard.module.scss";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Button from "../Button/Button";
import { setCurrentCar } from "../../redux/slices/carsSlice";

const CarCard = ({
  selector,
  isFavorite,
  img,
  year,
  make,
  model,
  rentalPrice,
  city,
  country,
  rentalCompany,
  type,
  mileage,
  functionality,
}) => {
  const dispatch = useDispatch();
  const cars = useSelector(selector, shallowEqual);

  const [favorite, setFavorite] = useState(isFavorite);

  const handleOpenModalClick = (e) => {
    const { id } = e.target.closest("li");
    dispatch(setCurrentCar(id));
  };

  const handleUpdateFavoriteClick = (e) => {
    const { id } = e.target.closest("li");

    let carToUpdateFavorite = cars.find((car) => car.id === id);
    const { isFavorite } = carToUpdateFavorite;
    carToUpdateFavorite = {
      ...carToUpdateFavorite,
      isFavorite: !isFavorite,
    };

    dispatch(updateFavorite(carToUpdateFavorite))
      .unwrap()
      .then(() => {
        setFavorite((prevState) => !prevState);
      });
  };

  return (
    <div className={css.product_card}>
      <div className={css.img_wrapper}>
        <button
          onClick={handleUpdateFavoriteClick}
          name="updateFavorite"
          className={css.button_icon}
        >
          <svg
            className={
              favorite ? `${css.icon_is_favorite}` : `${css.icon_no_favorite}`
            }
          >
            <use href={icons + "#heart"}></use>
          </svg>
        </button>
        <img src={img} alt={`${make} ${model} ${year}`} className={css.img} />
      </div>
      <div className={css.heading_group}>
        <h3 className={css.heading}>
          {make}
          <span className={css.heading_accent}> {model}, </span>
          {year}
        </h3>
        <span className={css.heading_price}>{rentalPrice}</span>
      </div>
      <p className={css.car_info}>
        <span className={css.car_info_point}>{city}</span>
        <span className={css.car_info_point}>{country}</span>
        <span className={css.car_info_point}>{rentalCompany}</span>
        <span className={css.car_info_point}>{type}</span>
        <span className={css.car_info_point}>{model}</span>
        <span className={css.car_info_point}>{mileage}</span>
        <span className={css.car_info_point}>{functionality}</span>
      </p>
      <Button onClick={handleOpenModalClick} text="Learn more" />
    </div>
  );
};

export default CarCard;

CarCard.propTypes = {
  selector: PropTypes.func,
  isFavorite: PropTypes.bool,
  img: PropTypes.string,
  year: PropTypes.string,
  make: PropTypes.string,
  model: PropTypes.string,
  rentalPrice: PropTypes.string,
  city: PropTypes.string,
  country: PropTypes.string,
  rentalCompany: PropTypes.string,
  type: PropTypes.string,
  mileage: PropTypes.string,
  functionality: PropTypes.string,
};
