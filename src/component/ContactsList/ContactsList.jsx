import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteContact } from "../../redux/appActions";

const ContactsList = ({ filter, contacts, deleteContact }) => {
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
                deleteContact(event.target.id);
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

export default connect(({ contacts, filter }) => ({ contacts, filter }), {
  deleteContact,
})(ContactsList);

ContactsList.propTypes = {
  onClick: PropTypes.func.isRequired,
  filter: PropTypes.array,
};
