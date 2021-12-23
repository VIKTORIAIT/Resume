import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import Navigation from "../Navigation/Navigation";
// import UserMenu from "../UserMenu/UserMenu";
// import AuthNav from "../AuthNav/AuthNav";
import { NavLink } from "react-router-dom";
import operations from "../../redux/authOperations";

//STYLES++++++++++++++++++++++++++
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

const AppBarEl = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);
  const dispatch = useDispatch();
  const name = useSelector((state) => state.authReducer.user.name);
  const email = useSelector((state) => state.authReducer.user.email);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            style={{ alignItems: "center" }}
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <NavLink
                activeStyle={{ color: "white" }}
                style={{ color: "#00CED1" }}
                to="/"
                exact
              >
                Главная
              </NavLink>
            </Typography>

            {isLoggedIn ? (
              <>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  <NavLink
                    activeStyle={{ color: "white" }}
                    style={{ color: "#00CED1" }}
                    to="/contacts"
                  >
                    Contacts
                  </NavLink>
                </Typography>
                <div style={{ display: "flex" }}>
                  <Typography variant="h8" component="div" sx={{ flexGrow: 1 }}>
                    <span>
                      Добро пожаловать, {name} {email}
                    </span>
                  </Typography>
                  <Button
                    style={{ height: "100" }}
                    color="error"
                    size="small"
                    variant="outlined"
                    onClick={(e) => {
                      dispatch(operations.logOut());
                    }}
                  >
                    Выйти
                  </Button>
                </div>
              </>
            ) : (
              <>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  <NavLink
                    activeStyle={{ color: "white" }}
                    style={{ color: "#00CED1" }}
                    to="/register"
                    exact
                  >
                    Регистрация
                  </NavLink>
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  <NavLink
                    activeStyle={{ color: "white" }}
                    style={{ color: "#00CED1" }}
                    to="/login"
                    exact
                  >
                    Логин
                  </NavLink>
                </Typography>
              </>
            )}
          </Box>

          {isLoggedIn && (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip>
                <IconButton>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default AppBarEl;
