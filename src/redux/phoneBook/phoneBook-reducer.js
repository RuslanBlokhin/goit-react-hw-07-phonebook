import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import {
  // addContactRequest,
  addContactSuccess,
  // addContactError,
  // deleteContactRequest,
  deleteContactSuccess,
  // deleteContactError,
  filterUpdate,
  // fetchContactRequest,
  fetchContactSuccess,
  // fetchContactError,
} from './phoneBook-actions';

const ContactsReducer = createReducer([], {
  [fetchContactSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

// const loading = createReducer(false, {
//   [fetchContactRequest]: () => true,
//   [fetchContactSuccess]: () => false,
//   [fetchContactError]: () => false,
//   [addContactRequest]: () => true,
//   [addContactSuccess]: () => false,
//   [addContactError]: () => false,
//   [deleteContactRequest]: () => true,
//   [deleteContactSuccess]: () => false,
//   [deleteContactError]: () => false,
// });

const FilterReducer = createReducer('', {
  [filterUpdate]: (_, { payload }) => payload,
});

export default combineReducers({
  ContactsReducer,
  FilterReducer,
  // loading,
});