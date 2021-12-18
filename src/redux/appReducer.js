import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import { SET_FILTER, ADD_CONTACT, DELETE_CONTACT } from "./constantsType";

const contacts = createReducer([], {
  [ADD_CONTACT]: (state, { payload }) => {
    const isIncluded = state.some((el) => el.name === payload.name);
    console.log(isIncluded);
    if (isIncluded) {
      alert("This name already exist in your contacts!");
      return state;
    }
    return [...state, payload];
  },
  [DELETE_CONTACT]: (state, { payload }) =>
    state.filter((el) => el.id !== payload),
});

const filter = createReducer("", {
  [SET_FILTER]: (state, { payload }) => payload,
});

export default combineReducers({
  contacts,
  filter,
});
