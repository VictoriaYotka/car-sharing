import { shallowEqual, useDispatch, useSelector } from "react-redux";
import CarCard from "../CarCard/CarCard";
import css from "./CarsList.module.scss";
import buttonCss from "../Button/Button.module.scss";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import { useEffect, useState } from "react";
import AnyFavorite from "../AnyFavorite/AnyFavorite";
import { useLocation } from "react-router";
import NotFound from "../../pages/Not found/NotFound";
import { updateFavorite } from "../../redux/operations/carsOperations";
import Filter from "../Filter/Filter";
import { setFilter } from "../../redux/slices/carsSlice";

const CarsList = ({ selector }) => {
  const cars = useSelector(selector, shallowEqual);
  const dispatch = useDispatch();
  const location = useLocation();

  const CARS_PER_PAGE = 8;

  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(CARS_PER_PAGE);
  const [carsToShow, setCarsToShow] = useState(() => cars.slice(start, end));
  const [selectBrandValue, setSelectBrandValue] = useState(null);

  useEffect(() => {
    if (cars.length !== 0 && carsToShow.length === 0 && start === 0) {
      setCarsToShow(cars.slice(start, end));
    }
  }, [cars, carsToShow, start, end]);

  useEffect(() => {
    if (location.pathname === "/favorites") {
      setCarsToShow(cars.slice(0, end));
    }
  }, [cars, end, location.pathname]);

  const handleLoadMoreClick = () => {
    setCarsToShow((prevState) => [
      ...prevState,
      ...cars.slice(start + CARS_PER_PAGE, end + CARS_PER_PAGE),
    ]);

    setStart((prevState) => prevState + CARS_PER_PAGE);
    setEnd((prevState) => prevState + CARS_PER_PAGE);
  };

  const handleUpdateFavoriteClick = (e) => {
    const { id } = e.target.closest("li");

    let carToUpdateFavorite = cars.find((car) => car.id === id);
    const { isFavorite } = carToUpdateFavorite;
    carToUpdateFavorite = {
      ...carToUpdateFavorite,
      isFavorite: !isFavorite,
    };

    dispatch(updateFavorite(carToUpdateFavorite));
  };

  const handleFilterFormSubmit = (e) => {
    e.preventDefault();

    const brand = selectBrandValue.map(({ value }) => value);
    const minPrice = e.target.elements.minPrice.value;
    const maxPrice = e.target.elements.maxPrice.value;
    const minMileage = e.target.elements.minMileage.value;
    const maxMileage = e.target.elements.maxMileage.value;

    if (
      brand === "" &&
      minPrice === "" &&
      maxPrice === "" &&
      minMileage === "" &&
      maxMileage === ""
    ) {
      console.log("choose to filter!");
      return;
    }

    const filterObj = {
      brand,
      minPrice,
      maxPrice,
      minMileage,
      maxMileage,
    };

    console.log(filterObj);

    dispatch(setFilter(filterObj));

    setSelectBrandValue(null);
    e.target.reset();
  };

  return (
    <>
      {carsToShow && (
        <Filter
          handleFilterFormSubmit={handleFilterFormSubmit}
          selectBrandValue={selectBrandValue}
          setSelectBrandValue={setSelectBrandValue}
        />
      )}
      <ul className={css.list}>
        {carsToShow.map((car) => {
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
                handleUpdateFavoriteClick={handleUpdateFavoriteClick}
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

      {carsToShow.length !== cars.length && (
        <Button
          onClick={handleLoadMoreClick}
          text="Load more"
          className={buttonCss.load_more}
        />
      )}

      {carsToShow.length === 0 && location.pathname === "/favorites" && (
        <AnyFavorite />
      )}

      {carsToShow.length === 0 && location.pathname === "/cars" && <NotFound />}
    </>
  );
};

export default CarsList;

CarsList.propTypes = {
  selector: PropTypes.func,
};
