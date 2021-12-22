import { useState } from 'react';
import { useDispatch } from 'react-redux';
import operations from '../redux/authOperations';

export default function LoginView() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(operations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  return (
    <div>
      <h1>Страница логина</h1>

      <form autoComplete="on" onSubmit={handleSubmit}>
        <label>
          Почта
          <input type="email" name="email" onChange={handleChange} />
        </label>

        <label>
          Пароль
          <input type="password" name="password" onChange={handleChange} />
        </label>

        <button type="submit">Войти</button>
      </form>
    </div>
  );
}
