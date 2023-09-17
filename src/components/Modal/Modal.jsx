import css from "./Modal.module.scss";
import icons from "../../images/icons.svg";
import Button from "../Button/Button";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { removeCurrentCar } from "../../redux/slices/carsSlice";
import { useEffect } from "react";
import { selectCurrentCarInfo } from "../../redux/selectors/selectors";

const Modal = () => {
  const currentCar = useSelector(selectCurrentCarInfo, shallowEqual);

  const {
    id,
    year,
    make,
    model,
    type,
    img,
    photoLink,
    description,
    fuelConsumption,
    engineSize,
    accessories,
    functionalities,
    rentalPrice,
    address,
    rentalConditions,
    mileage,
  } = currentCar;
  const [, city, country] = address.split(",");
  const formattedMileage = mileage.toLocaleString("en-US");

  const dispatch = useDispatch();

  const handleCloseClick = () => {
    dispatch(removeCurrentCar());
  };

  const handleBackdropClick = (e) => {
    const backdrop = e.target.id === "backdrop";
    const esc = e.key === "Escape";
    if (backdrop || esc) {
      dispatch(removeCurrentCar());
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleBackdropClick);
    document.addEventListener("keydown", handleBackdropClick);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("click", handleBackdropClick);
      document.removeEventListener("keydown", handleBackdropClick);
      document.body.style.overflow = "auto";
    };
  });

  return (
    <div id="backdrop" className={css.backdrop}>
      <div className={css.modal}>
        <button onClick={handleCloseClick} className={css.button_icon}>
          <svg className={css.icon}>
            <use href={icons + "#close"}></use>
          </svg>
        </button>
        <img
          src={img || photoLink}
          alt={`${make} ${model} ${year}`}
          className={css.image}
        />
        <h3 className={css.heading}>
          {make}
          <span className={css.heading_accent}> {model}, </span>
          {year}
        </h3>
        <p className={css.car_info}>
          <span className={css.car_info_point}>{city}</span>
          <span className={css.car_info_point}>{country}</span>
          <span className={css.car_info_point}>Id: {id}</span>
          <span className={css.car_info_point}>Year: {year}</span>
          <span className={css.car_info_point}>Type: {type}</span>
          <span className={css.car_info_point}>
            Fuel Consumption: {fuelConsumption}
          </span>
          <span className={css.car_info_point}>Engine Size: {engineSize}</span>
        </p>
        <p className={css.car_descr}>{description}</p>
        <h5 className={css.topic_heading}>Accessories and functionalities:</h5>
        <p className={css.car_topic_info}>
          {accessories.map((item, index) => (
            <span key={index} className={css.car_info_point}>
              {item}
            </span>
          ))}
        </p>
        <p className={css.car_topic_info_last}>
          {functionalities.map((item, index) => (
            <span key={index} className={css.car_info_point}>
              {item}
            </span>
          ))}
        </p>
        <h5 className={css.topic_heading}>Rental Conditions: </h5>
        <p className={css.conditions_descr}>
          {rentalConditions.split("\n").map((item, index) => (
            <span key={index} className={css.conditions_point}>
              {item}
            </span>
          ))}
          <span className={css.conditions_point}>
            Mileage: {formattedMileage}
          </span>
          <span className={css.conditions_point}>Price: {rentalPrice}</span>
        </p>
        <a href="tel:+380730000000" className={css.phone_link}>
          <Button text="Rental car" />
        </a>
      </div>
    </div>
  );
};

export default Modal;
