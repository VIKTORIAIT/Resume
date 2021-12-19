import { fetchContacts, addContacts } from "./appShelfApi";

import { createAsyncThunk } from "@reduxjs/toolkit";
import * as actions from "./appActions";

export const fetchContactsList = () => async (dispatch) => {
  dispatch(actions.fetchContactRequest());

  try {
    const contacts = await fetchContacts();
    dispatch(actions.fetchContactSuccess(contacts));
  } catch (error) {
    dispatch(actions.fetchContactError(error));
  }
};

export const addContact = (name, number) => (dispatch) => {
  const contact = {
    name,
    number,
  };
  dispatch(actions.addContactRequest());
  addContacts(contact)
    .then((data) => dispatch(actions.addContactSuccess(data)))
    .catch((error) => dispatch(actions.addContactError(error)));
};

// export const fetchBooks = createAsyncThunk(
//   'books/fetchBooks',
//   async (_, { rejectWithValue }) => {
//     try {
//       const books = await bookShelfAPI.fetchBooks();
//       return books;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   },
// );
