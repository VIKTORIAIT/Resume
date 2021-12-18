import s from './ContactForm.module.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../../redux/appActions';

function ContactForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState(null);

  const onChangeName = e => {
    setName(e.target.value);
  };

  const onChangeNumber = e => {
    setNumber(e.target.value);
  };

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        dispatch(actions.addContact(name, number));
      }}
      className={s.formStyle}
    >
      <p>Name</p>
      <input
        onChange={onChangeName}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <p>Phone</p>
      <input
        onChange={onChangeNumber}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button type="submit">Add Contact</button>
    </form>
  );
}

export default ContactForm;
