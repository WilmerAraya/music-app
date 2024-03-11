import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'f505d79910msha44c548644b7a86p161e17jsn49d19da8a59c',
    'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
  },
};

fetch('https://spotify23.p.rapidapi.com/browse_all/', options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

export const spotifyAPI = createApi({
  reducerPath: 'spotifyAPI',
});
