import { Suspense, lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch } from "react-router-dom";
import AppBarEl from "./component/AppBarEl/AppBarEl";
import PrivateRoute from "./component/PrivateRoute/PrivateRoute";
import Container from "./component/Container/Container";
import PublicRoute from "./component/PublicRoute/PublicRoute";
import operations from "./redux/authOperations";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

const ContactsView = lazy(() => import("./views/ContactsView"));
const HomeView = lazy(() => import("./views/HomeView"));
const RegisterView = lazy(() => import("./views/RegisterView"));
const LoginView = lazy(() => import("./views/LoginView"));

export default function App() {
  const dispatch = useDispatch();
  const isFetchingUser = useSelector(
    (state) => state.authReducer.isFetchingUser
  );
  console.log(isFetchingUser);

  useEffect(() => {
    dispatch(operations.fetchUser());
  }, [dispatch]);
  return (
    <Container>
      {isFetchingUser ? (
        <Box
          sx={{
            marginTop: 200,
            marginLeft: "auto",
            marginRight: "auto",
            width: 500,
          }}
        >
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton animation={false} />
        </Box>
      ) : (
        // <h1>Показываем React Skeleton</h1>
        <div className="container">
          <AppBarEl />
          <Switch>
            <Suspense
              fallback={
                <Box
                  sx={{
                    marginTop: 200,
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: 500,
                  }}
                >
                  <Skeleton />
                  <Skeleton animation="wave" />
                  <Skeleton animation={false} />
                </Box>
              }
            >
              <PublicRoute exact path="/">
                <HomeView />
              </PublicRoute>
              <PublicRoute path="/register" restricted>
                <RegisterView />
              </PublicRoute>
              <PublicRoute path="/login" redirectTo="/contacts" restricted>
                <LoginView />
              </PublicRoute>
              <PrivateRoute path="/contacts" redirectTo="/login">
                <ContactsView />
              </PrivateRoute>
            </Suspense>
          </Switch>
        </div>
      )}
    </Container>
  );
}
