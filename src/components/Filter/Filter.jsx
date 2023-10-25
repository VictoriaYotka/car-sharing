import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { selectCarBrands } from "../../redux/selectors/selectors";
import css from "./Filter.module.scss";
import buttonCss from "../Button/Button.module.scss";
import Button from "../Button/Button";
import PropTypes from "prop-types";
import Select from "react-select";
import icons from "../../images/icons.svg";
import { useState } from "react";
import { removeFilter } from "../../redux/slices/carsSlice";

const Filter = ({
  handleFilterFormSubmit,
  selectBrandValue,
  setSelectBrandValue,
}) => {
  const dispatch = useDispatch();
  const brands = useSelector(selectCarBrands, shallowEqual);

  const [isFilterShown, setIsFilterShown] = useState(false);

  const toggleFilterClick = () => {
    setIsFilterShown((prevState) => !prevState);
  };

  const handleFilterReset = () => {
    setSelectBrandValue(null);
    dispatch(removeFilter());
  };

  return (
    <div className={css.wrapper}>
      <button onClick={toggleFilterClick} className={css.button_icon}>
        <svg className={css.icon}>
          <use href={icons + "#funnel"}></use>
        </svg>
      </button>
      {isFilterShown && (
        <form onSubmit={handleFilterFormSubmit} className={css.form}>
          <div className={css.select_wrapper}>
            <label className={css.label} htmlFor="brand">
              Car brand
            </label>
            <Select
              inputId="brand"
              className={css.select}
              placeholder="Enter the text or select..."
              value={selectBrandValue}
              onChange={setSelectBrandValue}
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
              onClick={handleFilterReset}
            />
          </div>
        </form>
      )}
    </div>
  );
};

export default Filter;

Filter.propTypes = {
  handleFilterFormSubmit: PropTypes.func,
  selectBrandValue: PropTypes.any,
  setSelectBrandValue: PropTypes.func,
};
