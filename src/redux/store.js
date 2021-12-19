// import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import appReducer from "./appReducer";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import { logger } from "redux-logger/src";

// const contactsPersistConfig = {
//   key: "contacts",
//   storage,
//   whitelist: ["contacts"],
// };

// const store = configureStore({
//   reducer: { contacts: (state = []) => state },
// devTools: process.env.NODE_ENV === "development",
// middleware: [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
//   logger,
// ],
// });
// const store = configureStore({
//   reducer: { contacts: persistReducer(contactsPersistConfig, appReducer) },
//   devTools: process.env.NODE_ENV === "development",
//   middleware: [
//     ...getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
//     logger,
//   ],
// });

// const persistor = persistStore(store);

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appReducer";
const store = configureStore({
  reducer: {
    contacts: appReducer,
  },
});

export default store;
