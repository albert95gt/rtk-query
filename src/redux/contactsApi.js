import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6257012215aa015c82399c98.mockapi.io/api/v1/',
  }),
  endpoints: build => ({
    getContacts: build.query({
      query: () => 'contacts',
    }),
  }),
});

export const { useGetContactsQuery } = contactsApi;
