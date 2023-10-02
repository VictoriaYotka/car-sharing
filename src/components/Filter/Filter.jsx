import { shallowEqual, useSelector } from "react-redux";
import {
  selectCarBrands,
  // selectCarPrices,
} from "../../redux/selectors/selectors";
import css from "./Filter.module.scss";
import buttonCss from "../Button/Button.module.scss";
import Button from "../Button/Button";
import PropTypes from "prop-types";
import Select from "react-select";
import icons from "../../images/icons.svg";
import { useState } from "react";

const Filter = ({ handleFormSubmit }) => {
  const brands = useSelector(selectCarBrands, shallowEqual);
  // const prices = useSelector(selectCarPrices, shallowEqual);

  const [isFilterShown, setIsFilterShown] = useState(false);

  const handleFilterClick = () => {
    setIsFilterShown((prevState) => !prevState);
  };

  return (
    <div className={css.wrapper}>
      <button onClick={handleFilterClick} className={css.button_icon}>
        <svg className={css.icon}>
          <use href={icons + "#funnel"}></use>
        </svg>
      </button>
      {isFilterShown && (
        <form onSubmit={handleFormSubmit} className={css.form}>
          <div className={css.select_wrapper}>
            <label className={css.label} htmlFor="brand">
              Car brand
            </label>
            <Select
              className={css.select}
              defaultValue="Enter the text"
              options={brands}
              isMulti
            />
          </div>

          <div className={css.input_wrapper}>
            <label className={css.label} htmlFor="price">
              Price/ 1 hour
            </label>
            <input
              className={css.input}
              type="number"
              id="minPrice"
              name="minPrice"
              placeholder="From"
            />
            <input
              className={css.input}
              type="number"
              id="maxPrice"
              name="maxPrice"
              placeholder="To"
            />
          </div>

          <div className={css.input_wrapper}>
            <label className={css.label} htmlFor="mileage">
              Car mileage / km:
            </label>
            <input
              className={css.input}
              type="number"
              id="minMileage"
              name="minMileage"
              placeholder="From"
            />
            <input
              className={css.input}
              type="number"
              id="maxMileage"
              name="maxMileage"
              placeholder="To"
            />
          </div>

          <div className={css.button_wrapper}>
            <Button
              text="Search"
              className={buttonCss.button_search}
              type="submit"
            />
            <Button
              text="Reset"
              className={buttonCss.button_search}
              type="reset"
            />
          </div>
        </form>
      )}
    </div>
  );
};

export default Filter;

Filter.propTypes = {
  handleFormSubmit: PropTypes.func,
};
