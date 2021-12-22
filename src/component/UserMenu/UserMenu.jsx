import { useDispatch, useSelector } from 'react-redux';
import operations from '../../redux/authOperations';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(state => state.authReducer.user.name);

  return (
    <div>
      <span>Добро пожаловать, {name}</span>
      <button
        type="button"
        onClick={e => {
          dispatch(operations.logOut());
          window.location.reload();
        }}
      >
        Выйти
      </button>
    </div>
  );
}
