import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../utils/constants";

export const userFetch = createAsyncThunk("profile/view", async () => {
  const response = await axios.get(`${BASE_URL}/profile/view`, {
    withCredentials: true,
  });
  return response.data.data;
});

export const loginUser = createAsyncThunk("user/login", async (userData, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, userData, {
      withCredentials: true,
    });
    return response.data.data;
  } catch (error) {
    console.error("Login failed:", error);
    return rejectWithValue(error.response?.data?.message || "Login failed");
  }
});

export const logoutUser = createAsyncThunk("user/logout", async () => {
  return await axios.post(`${BASE_URL}/logout`, {}, { withCredentials: true });
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    error: null,
  },
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
      state.error = null;
    },
    removeUser: (state) => {
      state.user = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.error = null;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.error = action.payload;
    });
    builder.addCase(logoutUser.fulfilled, (state) => {
      state.user = null;
      state.error = null;
    });
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
