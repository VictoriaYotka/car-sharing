import PropTypes from "prop-types";

const CarCard = ({
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
  return (
    <div>
      <button name="updateFavorite">
        {isFavorite ? "favorite" : "no favorite"}
      </button>
      <img src={img} alt={`${make} ${model} ${year}`} />
      <h3>
        <span>{make}</span>
        <span>{model}</span>
        <span>{year}</span>
        <span>{rentalPrice}</span>
      </h3>

      <p>
        <span>{city}</span>
        <span>{country}</span>
        <span>{rentalCompany}</span>
        <span>{type}</span>
        <span>{model}</span>
        <span>{mileage}</span>
        <span>{functionality}</span>
      </p>
      <button name="openModal">Learn more</button>
    </div>
  );
};

export default CarCard;

CarCard.propTypes = {
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

// const {
//             id,
//             isFavorite,
//             year,
//             make,
//             model,
//             type,
//             img,
//             photoLink,
//             description,
//             fuelConsumption,
//             engineSize,
//             accessorie,
//             functionalities,
//             rentalPrice,
//             rentalCompany,
//             address,
//             rentalConditions,
//             mileage,
//           } = car;
