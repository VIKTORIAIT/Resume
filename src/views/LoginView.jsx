import { useState } from "react";
import { useDispatch } from "react-redux";
import operations from "../redux/authOperations";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import SaveIcon from "@mui/icons-material/Save";
import LoadingButton from "@mui/lab/LoadingButton";

export default function LoginView() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(operations.logIn({ email, password }));
    setEmail("");
    setPassword("");
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
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
        Страница логина
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
        autoComplete="on"
        onSubmit={handleSubmit}
      >
        <TextField
          id="standard-basic"
          label="Почта"
          variant="standard"
          onChange={handleChange}
          name="email"
          value={email}
          type="email"
        />

        <TextField
          id="standard-basic"
          label="Пароль"
          variant="standard"
          onChange={handleChange}
          name="password"
          value={password}
          type="password"
        />

        <LoadingButton
          color="secondary"
          loading={loading}
          loadingPosition="start"
          startIcon={<SaveIcon />}
          variant="contained"
          type="submit"
        >
          Войти
        </LoadingButton>
      </form>
    </div>
  );
}
