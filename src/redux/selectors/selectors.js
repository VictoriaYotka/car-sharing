export const selectCars = ({ cars }) => cars.items;

export const selectFavoriteCars = ({ cars }) =>
  cars.items.filter((car) => car.isFavorite);
