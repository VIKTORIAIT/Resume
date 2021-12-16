import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import appReducer from "./appReducer";
import { save } from "redux-localstorage-simple";

const store = createStore(
  appReducer,
  composeWithDevTools(
    applyMiddleware(
      thunk,
      save({ states: ["contacts"], namespace: "app-data" })
    )
  )
);

export default store;
