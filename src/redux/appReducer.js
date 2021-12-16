import { combineReducers } from "redux";
import { load } from "redux-localstorage-simple";
import {
  SET_CONTACTS,
  SET_FILTER,
  ADD_CONTACT,
  DELETE_CONTACT,
} from "./constantsType";
import { nanoid } from "nanoid";

let LOCAL_CONTACTS = load({ states: ["contacts"], namespace: "app-data" });

const DEFAULT_CONTACTS = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

if (
  !LOCAL_CONTACTS ||
  !LOCAL_CONTACTS.contacts ||
  !LOCAL_CONTACTS.contacts.length
) {
  LOCAL_CONTACTS.contacts = DEFAULT_CONTACTS;
}

const contacts = (
  state = LOCAL_CONTACTS.contacts,
  { type, value, name, number, id }
) => {
  switch (type) {
    case SET_CONTACTS:
      return value;

    case ADD_CONTACT:
      const isIncluded = state.some((el) => el.name === name);
      if (isIncluded) {
        alert("This name already exist in your contacts!");
        return state;
      }
      return [
        ...state,
        {
          name: name,
          number: number,
          id: nanoid(),
        },
      ];

    case DELETE_CONTACT:
      return state.filter((el) => el.id !== id);

    default:
      return state;
  }
};

const filter = (state = "", { type, value }) => {
  switch (type) {
    case SET_FILTER:
      return value;

    default:
      return state;
  }
};
export default combineReducers({ contacts, filter });
