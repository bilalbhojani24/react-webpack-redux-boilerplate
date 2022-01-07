import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { postApi } from 'services/posts';
import { createLogger } from 'redux-logger';
import getUserReducer from './reducers/data';

const logger = createLogger({
  duration: true,
  timestamp: true,
  logErrors: true,
});
export const store = configureStore({
  reducer: {
    data: getUserReducer as any,
    [postApi.reducerPath]: postApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }).concat(postApi.middleware, logger),
  devTools: process.env.REACT_APP_ENV !== 'production',
});

setupListeners(store.dispatch);
