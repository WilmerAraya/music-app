export const getEnvVariables = () => {
  const VITE_SPOTIFY_RAPID_API_KEY = import.meta.env.VITE_SPOTIFY_RAPID_API_KEY;

  return {
    VITE_SPOTIFY_RAPID_API_KEY,
  };
};
