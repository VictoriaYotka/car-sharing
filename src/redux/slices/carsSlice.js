import { createSlice } from "@reduxjs/toolkit";
import { handleFullfilled, handlePending, handleRejected } from "../utils";
import { updateFavorite, getAll } from "../operations/carsOperations";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  currentCar: "",
  isModalOpen: false,
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    setCurrentCar(state, { payload }) {
      state.currentCar = payload;
      state.isModalOpen = true;
    },
    removeCurrentCar(state) {
      state.currentCar = "payload";
      state.isModalOpen = false;
    },
    setFilter(state, { payload }) {
      state.filter = payload;
    },
    removeFilter(state) {
      state.filter = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAll.fulfilled, (state, { payload }) => {
        state.items = payload;
        handleFullfilled(state);
      })
      .addCase(updateFavorite.fulfilled, (state, { payload }) => {
        const carIndex = state.items.findIndex((car) => car.id === payload.id);
        state.items.splice(carIndex, 1, payload);
        handleFullfilled(state);
      })
      .addMatcher((action) => action.type.endsWith("/pending"), handlePending)

      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        handleRejected
      );
  },
});

export const carsReducer = carsSlice.reducer;
export const { setCurrentCar, removeCurrentCar, setFilter, removeFilter } =
  carsSlice.actions;
