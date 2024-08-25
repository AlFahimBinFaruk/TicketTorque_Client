import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";


import { ticket_api } from "./services/ticket_api";
import { user_api } from "./services/user_api";
import { order_api } from "./services/order_api";

const store = configureStore({
  reducer: {

    
    [ticket_api.reducerPath]: ticket_api.reducer,
    [user_api.reducerPath]: user_api.reducer,
    [order_api.reducerPath]: order_api.reducer


  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(ticket_api.middleware)
      .concat(user_api.middleware)
      .concat(order_api.middleware)
});

setupListeners(store.dispatch);

export default store;
