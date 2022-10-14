import { createSlice } from '@reduxjs/toolkit';
import {fetchContacts, addContacts, deleteContacts} from './operations';


const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null
},
  filter: ""
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    filterContacts(state, { payload }) {
      state.filter = payload;
  }
    },
  extraReducers: {
    [fetchContacts.pending]({contacts}) {
      contacts.isLoading = true
    },
    [fetchContacts.fulfilled]({contacts}, {payload}) {
      contacts.error = null;
      contacts.isLoading = false;
      contacts.items = payload
    },
    [fetchContacts.rejected]({contacts}, {payload}) {
      contacts.error = payload;
      contacts.isLoading = false
    },


    [addContacts.pending]({contacts}) {
      contacts.isLoading = true
    },
    [addContacts.fulfilled]({contacts}, {payload}) {
      contacts.error = null;
      contacts.isLoading = false;
      !contacts.items.some(el=>el.id === payload.id)&&
      contacts.items.push(payload)
    },
    [addContacts.rejected]({contacts}, {payload}) {
      contacts.error = payload;
      contacts.isLoading = false
    },


      [deleteContacts.pending]({contacts}) {
      contacts.isLoading = true
    },
    [deleteContacts.fulfilled]({contacts}, {payload}) {
      contacts.error = null;
      contacts.isLoading = false;
      contacts.items = contacts.items.filter(contact=>contact.id !==payload.id)
    },
    [deleteContacts.rejected]({contacts}, {payload}) {
      contacts.error = payload;
      contacts.isLoading = false
    },
    },
});

export const {filterContacts} = contactsSlice.actions;
export const contactReducer = contactsSlice.reducer;




// export const contactsApi = createApi({
//   reducerPath: 'contactsApi',
//   baseQuery: fetchBaseQuery({ baseUrl: 'https://634837c30484786c6e9501e1.mockapi.io/api/test1/' }),
//  tagTypes: ['Contact'],
//   endpoints: (builder) => ({
//     fetchContacts: builder.query({
//       query: () => `/contacts`,
// providesTags: ['Contact'],
//     }),
// addContacts: builder.mutation({
//   query: newContact => ({
//     url: `/contacts`,
//     method: "POST",
//     body: newContact,
//   })
// invalidatesTags: ['Contact'],
// }),
// deleteContacts: builder.mutation({
//   query: contactId => ({
//     url: `/contacts/${contactId}`,
//     method: "DELETE",
//   })
// invalidatesTags: ['Contact'],
// })
//   }),
// })


// export const { useFetchContactsQuery, useAddContactsQuery, useDeleteContactsQuery } = contactsApi;