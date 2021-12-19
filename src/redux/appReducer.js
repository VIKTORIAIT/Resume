import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import * as actions from "./appActions";

const contacts = createReducer([], {
  [actions.fetchContactSuccess]: (_, action) => action.payload,
  [actions.addContactSuccess]: (state, action) => [...state, action.payload],
});

// [deleteContactSuccess]: (state, { payload }) =>
//   state.filter(({ id }) => id !== payload),

const error = createReducer(null, {
  [actions.fetchContactError]: (_, action) => action.payload,
  [actions.fetchContactRequest]: () => null,
  [actions.addContactError]: (_, action) => action.payload,
  [actions.addContactRequest]: () => null,
});
// const isLoading = createReducer(false, {
//   [fetchBooks.pending]: () => true,
//   [fetchBooks.fulfilled]: () => false,
//   [fetchBooks.rejected]: () => false,
// });
// const contacts = createReducer([], {
//   [ADD_CONTACT]: (state, { payload }) => {
//     const isIncluded = state.some((el) => el.name === payload.name);
//     console.log(isIncluded);
//     if (isIncluded) {
//       alert("This name already exist in your contacts!");
//       return state;
//     }
//     return [...state, payload];
//   },
//   [DELETE_CONTACT]: (state, { payload }) =>
//     state.filter((el) => el.id !== payload),
// });

// const filter = createReducer("", {
//   [SET_FILTER]: (state, { payload }) => payload,
// });

export default combineReducers({
  contacts,
  // isLoading,
  error,
  // filter,
});
