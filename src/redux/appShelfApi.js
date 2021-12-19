import axios from "axios";
import { number } from "prop-types";

// console.log(axios);
axios.defaults.baseURL =
  "https://61bf372fb25c3a00173f4d21.mockapi.io/api/contacts";

export async function fetchContacts() {
  const { data } = await axios.get("/contacts");
  //   console.log(data);
  return data;
}

export async function addContacts(contact) {
  console.log(contact);
  const { data } = await axios.post("/contacts", contact);
  console.log(data);
  return data;
}
// addContacts();

// export function fetchContacts() {
//   return axios.get("/contacts");
// }

// export function deleteContact(id) {
//   return axios.delete(`/contacts/${id}`);
// }
