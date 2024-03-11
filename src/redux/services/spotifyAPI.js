import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const spotifyAPI = createApi({
  reducerPath: 'spotifyAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://spotify23.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set(
        'X-RapidAPI-Key',
        'f505d79910msha44c548644b7a86p161e17jsn49d19da8a59c'
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getGlobalTopSongs: builder.query({
      query: () => '/playlist_tracks/?id=37i9dQZEVXbMDoHDwVN2tF',
    }),
  }),
});

export const { useGetGlobalTopSongsQuery } = spotifyAPI;
