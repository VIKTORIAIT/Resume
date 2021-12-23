import { useDispatch, useSelector } from "react-redux";
import operations from "../../redux/authOperations";

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.authReducer.user.name);
  const email = useSelector((state) => state.authReducer.user.email);

  return (
    <div>
      <span>
        Добро пожаловать, {name} {email}
      </span>
      <button
        type="button"
        onClick={(e) => {
          dispatch(operations.logOut());
        }}
      >
        Выйти
      </button>
    </div>
  );
}
