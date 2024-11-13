import { configureStore } from "@reduxjs/toolkit";
import {contactReducer, filtersReducer} from "./reducer";

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filtersReducer,
  },
});