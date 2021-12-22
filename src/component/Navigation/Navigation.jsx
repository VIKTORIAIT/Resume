import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <NavLink to="/" exact>
      Главная
    </NavLink>
    {/* <NavLink to="/register">Регистрация</NavLink>
    <NavLink to="/login">Логин</NavLink> */}
    <NavLink to="/contacts">Контакты</NavLink>
  </nav>
);

export default Navigation;
