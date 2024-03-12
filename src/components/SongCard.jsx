import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import PlayPause from './PlayPause';

import { usePlayer } from '../hooks/usePlayer';

const SongCard = ({ song, data, index }) => {
  const { pauseSong, playSong } = usePlayer();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const handlePauseClick = () => {
    pauseSong();
  };

  const handlePlayClick = () => {
    playSong({ song, data, index });
  };

  return (
    <div
      className="flex flex-col w-[220px] p-4 bg-white/5 bg-opacity-80
     backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
    >
      <div className="relative w-full h-full group">
        <div
          className={`absolute inset-0 flex justify-center items-center 
          animate-fastfade bg-black/50
            group-hover:flex ${
              activeSong?.title === song
                ? 'flex bg-black bg-opacity-70'
                : 'hidden'
            }`}
        >
          <PlayPause
            song={song}
            activeSong={activeSong}
            isPlaying={isPlaying}
            data={data}
            handlePlayClick={handlePlayClick}
            handlePauseClick={handlePauseClick}
            index={index}
          />
        </div>
        <img
          className="rounded-lg"
          alt="song_img"
          src={song.album.images[1]?.url}
        />
      </div>
      <div className="mt-4 flex flex-col">
        <p className="font-semibold text-lg text-primary capitalize truncate">
          <Link to={`/songs/${song?.id}`}>{song.name}</Link>
        </p>
        <p className="text-sm truncate text-gray-300 mt-1">
          <Link to={song.artists ? song.album.artists[0].id : '/'}>
            {song.album.artists[0].name}
          </Link>
        </p>
      </div>
    </div>
  );
};
export default SongCard;
