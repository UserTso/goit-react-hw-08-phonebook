import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
};

const slice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    addContacts(state, { payload }) {
      // return { ...state, contacts: [...state.contacts, payload] };
      state.contacts.push(payload);
    },
    deleteContacts(state, { payload }) {
      // return {
      //   ...state,
      //   contacts: state.contacta.filter(contacts => contacts.id !== payload),
      // };
      state.contacts = state.contacts.filter(contacts => contacts.id !== payload);
    },
    filterContacts(state, { payload }) {
      // state.filter = state.contacts.filter(contact =>
      //   contact.includes(payload)
      // );
      state.filter = payload;
    },
  },
});

export const {addContacts, deleteContacts, filterContacts} = slice.actions;

export const contactsReducer = slice.reducer;