// import { useDispatch, useSelector } from "react-redux";
// import { authSelectors, authOperations } from '../../redux/auth';

export default function UserMenu() {
  // const dispatch = useDispatch();
  //   const name = useSelector(authSelectors.getUsername);

  return (
    <div>
      <span>Добро пожаловать, </span>
      <button type="button">Выйти</button>
    </div>
  );
}

// {name}

// onClick={() => dispatch(authOperations.logOut())}
