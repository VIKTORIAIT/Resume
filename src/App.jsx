import { Suspense, lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch } from "react-router-dom";
import AppBarEl from "./component/AppBarEl/AppBarEl";
import PrivateRoute from "./component/PrivateRoute/PrivateRoute";
import Container from "./component/Container/Container";
import PublicRoute from "./component/PublicRoute/PublicRoute";
import operations from "./redux/authOperations";

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
        <h1>Показываем React Skeleton</h1>
      ) : (
        <div className="container">
          <AppBarEl />
          <Switch>
            <Suspense fallback={<p>Loading...</p>}>
              <PublicRoute exact path="/">
                <HomeView />
                {/* <Route component={HomeView} /> */}
              </PublicRoute>
              <PublicRoute path="/register" restricted>
                <RegisterView />
                {/* <Route component={RegisterView} /> */}
              </PublicRoute>
              <PublicRoute path="/login" redirectTo="/contacts" restricted>
                <LoginView />
                {/* <Route path="/login" component={LoginView} /> */}
              </PublicRoute>
              <PrivateRoute path="/contacts" redirectTo="/login">
                <ContactsView />
                {/* <Route component={ContactsView} /> */}
              </PrivateRoute>
            </Suspense>
          </Switch>
        </div>
      )}
    </Container>
  );
}
