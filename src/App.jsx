import ContactForm from "./component/ContactForm";
import ContactsList from "./component/ContactsList";
import Filter from "./component/Filter";

export default function App() {
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
