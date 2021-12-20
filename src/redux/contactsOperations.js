import {
  fetchContacts,
  fetchAddContacts,
  fetchDeleteContact,
} from "./appService";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const addContactOperation = createAsyncThunk(
  "contacts/addContact",
  async ({ name, number }, { rejectWithValue }) => {
    const contact = {
      name,
      number,
    };
    try {
      const contacts = await fetchAddContacts(contact);
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchContactsListOperation = createAsyncThunk(
  "contacts/fetchContacts",
  async () => {
    const contacts = await fetchContacts();
    return contacts;
  }
);

export const deleteContactsOperation = createAsyncThunk(
  "contacts/deleteContact",
  async (id) => {
    const contacts = await fetchDeleteContact(id);
    return contacts;
  }
);
