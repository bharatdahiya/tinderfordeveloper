import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { BASE_URL } from "../utils/constants";

export const feedFetch = createAsyncThunk("feed/fetch", async () => {
  const response = await axios.get(`${BASE_URL}/users/feed`, {
    withCredentials: true,
  });
  return response.data.data;
});

const feedSlice = createSlice({
  name: "feed",
  initialState: {
    feed: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(feedFetch.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(feedFetch.fulfilled, (state, action) => {
      state.loading = false;
      state.feed = action.payload;
    });
    builder.addCase(feedFetch.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default feedSlice.reducer;
