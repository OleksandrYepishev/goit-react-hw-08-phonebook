import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { createSlice } from '@reduxjs/toolkit';

const ContactsFilterSlice = createSlice({
  name: 'filter',
  initialState: { filter: '' },
  reducers: {
    changeFilter(state, { payload }) {
      state.filter = payload;
    },
  },
});

export const { changeFilter } = ContactsFilterSlice.actions;
export const contactsFilterReducer = ContactsFilterSlice.reducer;

export const contactsApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState} ) => {
    
   const token = getState().auth.token;
      if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }

    return headers;
  }
  }),
  tagTypes: ['Contacts'],
    
  endpoints: (builder) => ({
    fetchContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ['Contacts']
    }),
    addContact: builder.mutation({
      query: (newContact) => ({
        url: '/contacts',
        method: 'POST',
        body: newContact,
      }),
      invalidatesTags: ['Contacts']
  }),
      deleteContact: builder.mutation({
      query: (deleteId) => ({
        url: `/contacts/${deleteId}`,
        method: 'DELETE',
        }),
        invalidatesTags: ['Contacts']
    }),
  }),
})

export const {
  useFetchContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation
} = contactsApi
