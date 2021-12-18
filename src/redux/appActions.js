import { createAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

import { SET_FILTER, ADD_CONTACT, DELETE_CONTACT } from "./constantsType";

export const setFilter = createAction(SET_FILTER);
export const deleteContact = createAction(DELETE_CONTACT);
export const addContact = createAction(ADD_CONTACT, (name, number) => ({
  payload: { name, number, id: nanoid() },
}));
