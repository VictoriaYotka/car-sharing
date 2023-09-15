import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../redux/operations/carsOperations";
import { useEffect } from "react";
import CarCard from "../../components/CarCard/CarCard";
import { selectCars } from "../../redux/selectors/selectors";

const Cars = () => {
  const cars = useSelector(selectCars);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!cars.length) {
      dispatch(getAll());
    }
  }, [dispatch, cars]);

  return (
    <ul>
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
          <li key={id}>
            <CarCard
              isFavorite={isFavorite}
              img={img || photoLink}
              year={year}
              make={make}
              model={model}
              rentalPrice={rentalPrice}
              city={city}
              country={country}
              rentalCompany={rentalCompany}
              type={type}
              mileage={mileage}
              functionality={functionality}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default Cars;
