/* eslint-disable import/no-anonymous-default-export */
import phoneBookReducer from './phoneBook/phoneBook-reducer';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const store = configureStore({
  reducer: {
    contacts: phoneBookReducer,
  },
  middleware,
  devToolss: process.env.NODE_ENV === 'development',
});

// const persistor = persistStore(store);

export default store;
