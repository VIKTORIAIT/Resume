import { useState } from 'react';
import operations from '../redux/authOperations';
import { useDispatch } from 'react-redux';

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onHandleChange = ev => {
    switch (ev.target.name) {
      case 'name':
        setName(ev.target.value);
        break;
      case 'email':
        setEmail(ev.target.value);
        break;
      case 'password':
        setPassword(ev.target.value);
        break;
      default:
        break;
    }
  };

  const onSubmitFunc = ev => {
    ev.preventDefault();
    dispatch(operations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Страница регистрации</h1>

      <form onSubmit={onSubmitFunc} autoComplete="off">
        <label>
          Имя
          <input
            onChange={onHandleChange}
            name="name"
            value={name}
            type="text"
            name="name"
          />
        </label>

        <label>
          Почта
          <input
            onChange={onHandleChange}
            name="email"
            type="email"
            name="email"
            value={email}
          />
        </label>

        <label>
          Пароль
          <input
            onChange={onHandleChange}
            type="password"
            name="password"
            name="password"
            value={password}
          />
        </label>

        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
}
