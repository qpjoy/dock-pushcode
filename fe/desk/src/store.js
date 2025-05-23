import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./features/Account/accountSlice";

const store = configureStore({
  reducer: {
    account: accountReducer
  }
});

export default store;
