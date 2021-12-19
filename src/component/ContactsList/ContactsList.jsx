import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContactsList } from "../../redux/contactsOperations";
// import { getContacts } from "../../redux/selectors";

const ContactsList = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.contacts.filter);
  const contacts = useSelector((state) => {
    console.log(state);
    return state.contacts.contacts;
  });

  // const contactsList = contacts.filter((item) => {
  //   return item.name.toLowerCase().includes(filter.toLowerCase());
  // });

  useEffect(() => dispatch(fetchContactsList()), [dispatch]);
  console.log(contacts);
  return (
    <ul>
      {contacts.map((el) => {
        return (
          <li key={el.id}>
            {el.name + ":" + el.number}{" "}
            <button
              onClick={(event) => {
                // dispatch(actions.deleteContact(event.target.id));
              }}
              id={el.id}
              type="button"
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactsList;
