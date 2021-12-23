import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navigation = () => {
  const isLoggedInEl = useSelector((state) => state.authReducer.isLoggedIn);
  return (
    <nav>
      <NavLink to="/" exact>
        Phonebook
      </NavLink>
      {/* <NavLink to="/register">Регистрация</NavLink>
    <NavLink to="/login">Логин</NavLink> */}
      {isLoggedInEl && <NavLink to="/contacts">Contacts</NavLink>}
    </nav>
  );
};

export default Navigation;
