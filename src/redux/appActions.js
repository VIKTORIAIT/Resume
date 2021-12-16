import {
  SET_CONTACTS,
  SET_FILTER,
  ADD_CONTACT,
  DELETE_CONTACT,
} from "./constantsType";

export const setContacts = (value) => ({
  type: SET_CONTACTS,
  value,
});

export const addContact = (name, number) => ({
  type: ADD_CONTACT,
  name,
  number,
});

export const deleteContact = (id) => ({
  type: DELETE_CONTACT,
  id,
});

export const setFilter = (value) => ({
  type: SET_FILTER,
  value,
});
