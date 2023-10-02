export const selectCars = ({ cars }) => cars.items;

export const selectFavoriteCars = ({ cars }) =>
  cars.items.filter((car) => car.isFavorite);

export const selectCurrentCarInfo = ({ cars }) =>
  cars.items.filter((car) => car.id === cars.currentCar)[0];

export const selectIsModalOpen = ({ cars }) => cars.isModalOpen;

export const selectCarBrands = ({ cars }) => {
  const brands = cars.items.map((car) => car.make);
  const uniqueBrands = [...new Set(brands)]
    .sort((a, b) => a.localeCompare(b))
    .reduce((acc, el) => {
      return [...acc, { value: el.toLowerCase(), label: el }];
    }, []);
  return uniqueBrands;
};

export const selectCarPrices = ({ cars }) => {
  const prices = cars.items.map((car) => car.rentalPrice);
  const uniquePrices = [...new Set(prices)]
    .map((el) => Number(el.slice(1)))
    .sort((a, b) => a - b)
    .reduce((acc, el) => {
      return [...acc, { value: el, label: el }];
    }, []);
  return uniquePrices;
};
