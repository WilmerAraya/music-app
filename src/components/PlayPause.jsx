import { FaPlayCircle, FaPauseCircle } from 'react-icons/fa';

const PlayPause = ({
  song,
  activeSong,
  isPlaying,
  handlePlayClick,
  handlePauseClick,
}) => {
  return (
    <div className="flex justify-center items-center h-full w-full">
      {isPlaying && activeSong?.id === song.id ? (
        <FaPauseCircle
          className="animate-fastfade text-gray-300"
          size={45}
          onClick={handlePauseClick}
        />
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
