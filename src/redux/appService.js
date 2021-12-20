import axios from "axios";

axios.defaults.baseURL =
  "https://61bf372fb25c3a00173f4d21.mockapi.io/api/contacts";

export async function fetchContacts() {
  const { data } = await axios.get("/contacts");
  return data;
}

export async function fetchAddContacts(contact) {
  const { data } = await axios.post("/contacts", contact);
  return data;
}

export async function fetchDeleteContact(id) {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
}
