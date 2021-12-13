import React, { useState, useEffect } from "react";
// import { Component } from "react";
import { nanoid } from "nanoid";
import ContactList from "./component/ContactList";
import ContactForm from "./component/ContactForm";
import Filter from "./component/Filter";
import s from "./App.module.css";
import * as storage from "./services/localStorage";

const STORAGE_KEY = "contacts";

export default function App() {
  // class App extends Component {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  const savedContacts = storage.get(STORAGE_KEY);
  if (savedContacts) setContacts(savedContacts);

  // state = {
  //   contacts: [
  //     { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  //     { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  //     { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  //     { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  //   ],
  //   name: "",
  //   number: "",
  //   filter: "",
  // };

  useEffect(() => {
    storage.save(STORAGE_KEY, contacts);
  }, contacts);

  // useEffect(() => {
  //   const savedContacts = storage.get(STORAGE_KEY);
  //   if (savedContacts) {
  //     setContacts savedContacts;
  //   }
  // }, [contacts]);

  const componentDidUpdate = (prevProps, prevState) => {
    const { contacts } = this.state;
    if (prevState.contacts !== contacts) {
      storage.save(STORAGE_KEY, contacts);
    }
  };

  const onChange = (ev) => {
    this.setState({ [ev.target.name]: ev.target.value });
  };

  const handleFilterChange = (ev) => this.setState({ filter: ev.target.value });
  const getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const onDelete = (ev) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (item) => item.number !== ev.target.id
      ),
    }));
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const isDoubleName = contacts.some((el) => el.name === name);
    if (isDoubleName) {
      alert(`${name} is already in contacts`);
    }
    if (!isDoubleName) {
      this.setState((prevState) => ({
        contacts: [
          ...prevState.contacts,
          {
            name: prevState.name,
            id: nanoid(),
            number: prevState.number,
          },
        ],
      }));
    }
  };

  return (
    <div className={s.container}>
      <h1>Phonebook</h1>
      <ContactForm onChange={onChange} onSubmit={handleSubmit} />
      <h2>Contacts</h2>
      <Filter onChange={handleFilterChange} />
      <ContactList data={getFilteredContacts()} onDelete={onDelete} />
    </div>
  );
}
