import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContacts,
  deleteContacts,
} from './contactsOperations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  filter: '',
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    filterContacts(state, { payload }) {
      state.filter = payload;
    },
  },
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, { payload }) {
      state.error = null;
      state.isLoading = false;
      state.items = payload;
    },
    [fetchContacts.rejected](state, { payload }) {
      state.error = payload;
      state.isLoading = false;
    },

    [addContacts.pending](state) {
      state.isLoading = true;
    },
    [addContacts.fulfilled](state, { payload }) {
      state.error = null;
      state.isLoading = false;
      !state.items.some(el => el.id === payload.id) &&
        state.items.push(payload);
    },
    [addContacts.rejected](state, { payload }) {
      state.error = payload;
      state.isLoading = false;
    },

    [deleteContacts.pending](state) {
      state.isLoading = true;
    },
    [deleteContacts.fulfilled](state, { payload }) {
      state.error = null;
      state.isLoading = false;
      state.items = state.items.filter(
        contact => contact.id !== payload
      );
    },
    [deleteContacts.rejected](state, { payload }) {
      state.error = payload;
      state.isLoading = false;
    },
  },
});

export const { filterContacts } = contactsSlice.actions;
export const contactReducer = contactsSlice.reducer;
