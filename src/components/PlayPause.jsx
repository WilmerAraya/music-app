import { FaPlayCircle, FaPauseCircle } from 'react-icons/fa';
import { usePlayer } from '../hooks/usePlayer';
import { useGetGlobalTopSongsQuery } from '../redux/services/spotifyAPI';

const PlayPause = ({
  song,
  activeSong,
  isPlaying,
  handlePlayClick,
  handlePauseClick,
}) => {
  // console.log(isPlaying, activeSong, song);

  return (
    <div className="flex justify-center items-center h-full w-full">
      {isPlaying && activeSong?.id === song.id ? (
        <FaPauseCircle size={35} />
      ) : (
        <FaPlayCircle
          className="animate-fastfade text-gray-300"
          size={45}
          onClick={handlePlayClick}
        />
      )}
    </div>
  );
};

export default PlayPause;
