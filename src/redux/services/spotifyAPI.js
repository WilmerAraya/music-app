import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getEnvVariables } from '../../helpers/getEnvVariables';

const { VITE_SPOTIFY_RAPID_API_KEY } = getEnvVariables();

export const spotifyAPI = createApi({
  reducerPath: 'spotifyAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://spotify23.p.rapidapi.com',
    prepareHeaders: (headers) => {
      console.log(VITE_SPOTIFY_RAPID_API_KEY);
      headers.set('X-RapidAPI-Key', VITE_SPOTIFY_RAPID_API_KEY);
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
