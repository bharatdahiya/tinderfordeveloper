import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user-slice";
import feedReducer from "./feed-slice";
import connectionsReducer from "./connection-slice";
import requestReducer from "./request-slice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    feed: feedReducer,
    request: requestReducer,
    connections: connectionsReducer
  },
});
