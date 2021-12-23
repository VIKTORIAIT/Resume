import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
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
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginLeft: "auto",
              marginRight: "auto",
              width: 350,
            }}
            href="#"
            underline="always"
            key={el.id}
          >
            {el.name} : {el.number}
            <Button
              style={{ height: 30 }}
              variant="outlined"
              startIcon={<DeleteIcon />}
              id={el.id}
              onClick={(event) => {
                dispatch(deleteContactsOperation(event.target.id));
                console.log(event.target.id);
              }}
            >
              Delete
            </Button>
          </Link>
        );
      })}
    </ul>
  );
};

export default ContactsList;
