import ContactForm from '../component/ContactForm/ContactForm';
import Filter from '../component/Filter/Filter';
import ContactsList from '../component/ContactsList/ContactsList';
// import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";

// import { ReactComponent as AddIcon } from "../icons/add.svg";
// import { todosOperations, todosSelectors } from "../redux/todos";

// const barStyles = {
//   display: "flex",
//   alignItems: "flex-end",
//   marginBottom: 20,
// };

export default function ContactsView(params) {
  return (
    <>
      <div>
        {/* {isLoadingTodos && <h1>Загружаем...</h1>} */}
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactsList />
      </div>
    </>
  );
}

// isModalOpen
