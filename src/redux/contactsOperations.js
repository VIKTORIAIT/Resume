import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = createAsyncThunk(
  "auth/register",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/users/signup", credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/users/login", credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// export async function fetchContacts() {
//   const { data } = await axios.get("/contacts");
//   return data;
// }

// export async function fetchAddContacts(contact) {
//   const { data } = await axios.post("/contacts", contact);
//   return data;
// }

// export async function fetchDeleteContact(id) {
//   const { data } = await axios.delete(`/contacts/${id}`);
//   return data;
// }
const operations = {
  register,
  // logOut,
  logIn,
  // fetchCurrentUser,
};
export default operations;
