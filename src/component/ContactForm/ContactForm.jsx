import s from "./ContactForm.module.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContactOperation } from "../../redux/contactsOperations";
import SaveIcon from "@mui/icons-material/Save";
import LoadingButton from "@mui/lab/LoadingButton";
import TextField from "@mui/material/TextField";

function ContactForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [number, setNumber] = useState(null);
  const contacts = useSelector((data) => data.contacts.contacts);

  const [loading, setLoading] = React.useState(false);
  function handleClick() {
    setLoading(true);
  }

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNumber = (e) => {
    setNumber(e.target.value);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const isIncluded = contacts.some((el) => el.name === name);

        if (isIncluded) {
          alert("This name already exist in your contacts!");
          return;
        }
        dispatch(addContactOperation({ name, number }));
      }}
      className={s.formStyle}
    >
      {/* <p>Name</p> */}

      <TextField
        style={{ marginBottom: 10 }}
        id="outlined-password-input"
        autoComplete="current-password"
        label="name"
        onChange={onChangeName}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      {/* <p>Phone</p> */}
      <TextField
        style={{ marginBottom: 10 }}
        id="outlined-password-input"
        autoComplete="current-password"
        label="number"
        onChange={onChangeNumber}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <LoadingButton
        color="secondary"
        loading={loading}
        loadingPosition="start"
        startIcon={<SaveIcon />}
        variant="contained"
        type="submit"
      >
        Add Contact
      </LoadingButton>
    </form>
  );
}

export default ContactForm;
