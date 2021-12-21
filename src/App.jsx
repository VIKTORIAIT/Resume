// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import { Switch, Route } from "react-router-dom";
import AppBar from "./component/AppBar/AppBar";
import ContactsView from "./views/ContactsView";
import HomeView from "./views/HomeView";
import RegisterView from "./views/RegisterView";
import LoginView from "./views/LoginView";
console.log(Switch);
// import { authOperations } from './redux/auth';

export default function App() {
  return (
    <div className="container">
      <AppBar />
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/register" component={RegisterView} />
        <Route path="/login" component={LoginView} />
        <Route path="/todos" component={ContactsView} />
      </Switch>
    </div>
  );
}
