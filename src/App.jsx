import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import ContactForm from "./component/ContactForm";
import ContactsList from "./component/ContactsList";
import Filter from "./component/Filter";
import { nanoid } from "nanoid";
import * as storage from "./component/services/localStorage";
import { setContacts, setFilter } from "./redux/appActions";

const STORAGE_KEY = "contacts";

function App({ setFilter }) {
  // const handleFilterChange = (e) => {
  //   setFilter(e.target.value);
  // };

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
}
const mapStateToProps = ({ filter, contacts }) => ({
  filter,
  contacts,
});

export default connect(mapStateToProps, { setContacts, setFilter })(App);
