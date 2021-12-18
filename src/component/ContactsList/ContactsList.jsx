import * as actions from "../../redux/appActions";
import { useDispatch, useSelector } from "react-redux";

const ContactsList = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.contacts.filter);
  const contacts = useSelector((state) => {
    return state.contacts.contacts;
  });
  const contactsList = contacts.filter((item) => {
    return item.name.toLowerCase().includes(filter.toLowerCase());
  });
  return (
    <ul>
      {contactsList.map((el) => {
        return (
          <li key={el.id}>
            {el.name + ":" + el.number}{" "}
            <button
              onClick={(event) => {
                dispatch(actions.deleteContact(event.target.id));
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
