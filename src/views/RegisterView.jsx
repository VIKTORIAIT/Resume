import { useState } from "react";
import operations from "../redux/authOperations";
import { useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";
import SaveIcon from "@mui/icons-material/Save";
import LoadingButton from "@mui/lab/LoadingButton";
import Typography from "@mui/material/Typography";

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onHandleChange = (ev) => {
    switch (ev.target.name) {
      case "name":
        setName(ev.target.value);
        break;
      case "email":
        setEmail(ev.target.value);
        break;
      case "password":
        setPassword(ev.target.value);
        break;
      default:
        break;
    }
  };

  const onSubmitFunc = (ev) => {
    ev.preventDefault();
    dispatch(operations.register({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
  };
  const [loading, setLoading] = useState(false);
  function handleClick() {
    setLoading(true);
  }

  return (
    <div>
      <Typography
        style={{ marginTop: 30 }}
        variant="h6"
        gutterBottom
        component="div"
      >
        Страница регистрации
      </Typography>

      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 15,
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: 200,
          paddingRight: 200,
        }}
        onSubmit={onSubmitFunc}
        autoComplete="off"
      >
        <TextField
          id="standard-basic"
          label="Имя"
          variant="standard"
          onChange={onHandleChange}
          name="name"
          value={name}
          type="text"
        />
        <TextField
          id="standard-basic"
          label="Почта"
          variant="standard"
          onChange={onHandleChange}
          name="email"
          type="email"
          value={email}
        />
        <TextField
          style={{ marginBottom: 20 }}
          id="standard-basic"
          label="Пароль"
          variant="standard"
          onChange={onHandleChange}
          type="password"
          name="password"
          value={password}
        />

        <LoadingButton
          color="secondary"
          loading={loading}
          loadingPosition="start"
          startIcon={<SaveIcon />}
          variant="contained"
          type="submit"
        >
          Зарегистрироваться
        </LoadingButton>
      </form>
    </div>
  );
}
