import React, { useState, useEffect } from 'react';
import ContactForm from './component/ContactForm';
import ContactsList from './component/ContactsList';
import Filter from './component/Filter';
import { nanoid } from 'nanoid';
import * as storage from './component/services/localStorage';

const STORAGE_KEY = 'contacts';
const test = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export default function App() {
  const [contacts, setContacts] = useState(storage.get(STORAGE_KEY) || test);
  const [filter, setFilter] = useState('');

  const addContact = (e, name, number) => {
    e.preventDefault();
    const isIncluded = contacts.some(el => el.name === name);
    if (isIncluded) {
      alert('This name already exist in your contacts!');
      return;
    }
    setContacts(prevState => [
      ...prevState,
      {
        name: name,
        number: number,
        id: nanoid(),
      },
    ]);
  };

  useEffect(() => {
    storage.save(STORAGE_KEY, contacts.length ? contacts : null);
  }, [contacts]);

  const handleFilterChange = e => {
    setFilter(e.target.value);
  };

  const getFilterContacts = () => {
    return contacts.filter(item => {
      return item.name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  const onDelete = ev => {
    setContacts(contacts.filter(el => el.id !== ev.target.id));
  };

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter onChange={handleFilterChange} />
      <ContactsList filter={getFilterContacts()} onClick={onDelete} />
    </div>
  );
}
