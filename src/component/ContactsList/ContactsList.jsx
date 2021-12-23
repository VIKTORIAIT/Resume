import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Link from "@mui/material/Link";
import {
  fetchContactsListOperation,
  deleteContactsOperation,
} from "../../redux/contactsOperations";

const ContactsList = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.contacts.filter);
  const contacts = useSelector((state) => {
    return state.contacts.contacts;
  });
  const [loading, setLoading] = React.useState(false);
  function handleClick() {
    setLoading(true);
  }

  const contactsList = contacts.filter((item) => {
    return item.name.toLowerCase().includes(filter.toLowerCase());
  });
  fetchContactsListOperation();
  useEffect(() => dispatch(fetchContactsListOperation()), [dispatch]);
  return (
    <ul>
      {contactsList.map((el) => {
        return (
          <Link
            href="#"
            underline="always"
            key={el.id}
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              width: 350,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {el.name} : {el.number}
            <IconButton
              // style={{ height: 45 }}
              aria-label="delete"
              size="large"
              onClick={(event) =>
                dispatch(deleteContactsOperation(event.target.id))
              }
              id={el.id}
              // type="button"
            >
              <DeleteIcon />
            </IconButton>
          </Link>
        );
      })}
    </ul>
  );
};

export default ContactsList;
