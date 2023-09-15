import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../instance";

const getAll = createAsyncThunk(
  "cars/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get("cars");
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

const updateFavorite = createAsyncThunk(
  "cars/updateFavorite",
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await instance.put(`cars/${body.id}`, body);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export { getAll, updateFavorite };
