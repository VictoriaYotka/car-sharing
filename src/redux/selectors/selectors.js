export const selectCars = ({ cars }) => cars.items;

export const selectFavoriteCars = ({ cars }) =>
  cars.items.filter((car) => car.isFavorite);

export const selectCurrentCarInfo = ({ cars }) =>
  cars.items.filter((car) => car.id === cars.currentCar)[0];

export const selectIsModalOpen = ({ cars }) => cars.isModalOpen;
