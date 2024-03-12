import { useSelector, useDispatch } from 'react-redux';
import { playPause, setActiveSong } from '../redux/features/playerSlice';

export const usePlayer = () => {
  const dispatch = useDispatch();

  const pauseSong = () => {
    dispatch(playPause(false));
  };

  const playSong = ({ song, data, index }) => {
    dispatch(setActiveSong({ song, data, index }));
    dispatch(playPause(true));
  };

  return {
    pauseSong,
    playSong,
  };
};
