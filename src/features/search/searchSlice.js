import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchResults } from "./searchAPI";

const initialState = {
  value: "",
  status: "idle",
};

export const artFetch = createAsyncThunk(
  "search/fetchResults",
  async (searchVal) => {
    console.log(searchVal);
    const response = await fetchResults(searchVal);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const searchSlice = createSlice({
  name: "search",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(artFetch.pending, (state) => {
        state.status = "loading";
      })
      .addCase(artFetch.rejected, (state) => {
        state.value = false;
        state.status = "idle";
      })
      .addCase(artFetch.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = action.payload;
      });
  },
});

export const selectCount = (state) => state.search.value;

export default searchSlice.reducer;
