import { FaPlayCircle, FaPauseCircle } from 'react-icons/fa';

// eslint-disable-next-line no-confusing-arrow
const PlayPause = ({
  song,
  activeSong,
  isPlaying,
  handlePlayClick,
  handlePauseClick,
}) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  isPlaying && activeSong?.id === song.id ? (
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
  );

export default PlayPause;
