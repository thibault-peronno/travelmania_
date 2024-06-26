import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import spinnerReducer from "./features/spinnerSlice";

const store = configureStore({
  reducer: {
    authReducer: authReducer,
    spinnerReducer: spinnerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredPaths: ["payload.headers"], // Ignorer les headers dans le payload
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
