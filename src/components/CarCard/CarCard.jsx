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
      <span>{isFavorite ? "favorite" : "no favorite"}</span>
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
        {/* <span>Premium</span> */}
        <span>{type}</span>
        <span>{model}</span>
        <span>{mileage}</span>
        <span>{functionality}</span>
      </p>
      <button>Learn more</button>
    </div>
  );
};

export default CarCard;

CarCard.propTypes = {
  isFavorite: PropTypes.bool,
  img: PropTypes.string,
  year: PropTypes.number,
  make: PropTypes.string,
  model: PropTypes.string,
  rentalPrice: PropTypes.string,
  city: PropTypes.string,
  country: PropTypes.string,
  rentalCompany: PropTypes.string,
  type: PropTypes.string,
  mileage: PropTypes.number,
  functionality: PropTypes.string,
};

// {

//     "year": 2008,
//     "make": "Buick",
//     "model": "Enclave",
//     "type": "SUV",
//     "img": "https://res.cloudinary.com/ditdqzoio/image/upload/v1687252635/cars/buick_enclave.jpg",
//     "description": "The Buick Enclave is a stylish and spacious SUV known for its comfortable ride and luxurious features.",
//     "fuelConsumption": "10.5",
//     "engineSize": "3.6L V6",
//     "accessories": [
//       "Leather seats",
//       "Panoramic sunroof",
//       "Premium audio system"
//     ],
//     "functionalities": [
//       "Power liftgate",
//       "Remote start",
//       "Blind-spot monitoring"
//     ],
//     "rentalPrice": "$40",
//     "rentalCompany": "Luxury Car Rentals",
//     "address": "123 Example Street, Kiev, Ukraine",
//     "rentalConditions": "Minimum age: 25\nValid driver's license\nSecurity deposit required",
//     "mileage": 5858
//   },

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
