import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import Filter from "./appActions";
// import {
//   fetchContactsListOperation,
//   deleteContactsOperation,
//   addContactOperation,
// } from "./contactsOperations";

// const contacts = createReducer([], {
//   [fetchContactsListOperation.fulfilled]: (_, action) => action.payload,
//   [addContactOperation.fulfilled]: (state, action) => [
//     ...state,
//     action.payload,
//   ],
//   [deleteContactsOperation.fulfilled]: (state, action) => {
//     return state.filter((el) => el.id !== action.payload.id);
//   },
// });

// const error = createReducer(null, {
//   [fetchContactsListOperation.rejected]: (_, action) => action.payload,
//   [fetchContactsListOperation.pending]: () => null,
//   [addContactOperation.rejected]: (_, action) => action.payload,
//   [addContactOperation.pending]: () => null,
//   [deleteContactsOperation.pending]: () => null,
//   [deleteContactsOperation.rejected]: (_, action) => action.payload,
// });

const filter = createReducer("", {
  [Filter]: (state, { payload }) => payload,
});

export default combineReducers({
  // contacts,
  // error,
  filter,
});
