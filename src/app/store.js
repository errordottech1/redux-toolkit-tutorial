import { configureStore } from "@reduxjs/toolkit";

import { weatherApi } from "../apis/weatherApi";

export default configureStore({
  reducer: {
    [weatherApi.reducerPath]: weatherApi.reducer,
  },
});
