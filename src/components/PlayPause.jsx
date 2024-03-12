import { FaPlayCircle, FaPauseCircle } from 'react-icons/fa';

const PlayPause = ({
  isPlaying,
  activeSong,
  song,
  handlePause,
  handlePlay,
}) => (
  <div className="flex justify-center items-center h-full w-full">
    {isPlaying && activeSong?.title === song.title ? (
      <FaPauseCircle size={35} />
    ) : (
      <FaPlayCircle
        className="  animate-slideupFaster text-gray-300"
        size={45}
      />
    )}
  </div>
);

export default PlayPause;
