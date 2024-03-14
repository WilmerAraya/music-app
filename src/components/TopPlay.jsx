/* eslint-disable import/no-unresolved */
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';

import 'swiper/css';
import 'swiper/css/free-mode';
import { useGetGlobalTopSongsQuery } from '../redux/services/spotifyAPI';
import { usePlayer } from '../hooks/usePlayer';
import PlayPause from './PlayPause';

const TopChartCard = ({
  song,
  index,
  isPlaying,
  activeSong,
  handlePlayClick,
  handlePauseClick,
}) => (
  <div
    className="w-full flex flex-row items-center hover:bg-[#4c426e] py-2
   p-4 rounded-lg cursor-pointer mb-2"
  >
    <h3 className="font-bold text-base text-primary mr-3">{index + 1}.</h3>
    <div className="flex-1 flex flex-row justify-between items-center">
      <img
        className="h-20 w-20 rounded-lg"
        src={song?.album.images[0].url}
        alt={song?.name}
      />
      <div className="flex-1 flex flex-col justify-center mx-3">
        <Link to={`/songs/${song.id}`}>
          <p className="text-lg font-bold text-primary capitalize">
            {song.name}
          </p>
        </Link>
        <Link to={`/artists/${song?.album.artists[0].id}`}>
          <p className="text-base text-gray-300 capitalize">
            {song?.album.artists[0].name}
          </p>
        </Link>
      </div>
    </div>
    <PlayPause
      isPlaying={isPlaying}
      activeSong={activeSong}
      song={song}
      handlePauseClick={handlePauseClick}
      handlePlayClick={handlePlayClick}
    />
  </div>
);

const TopPlay = () => {
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data } = useGetGlobalTopSongsQuery();
  const divRef = useRef(null);
  const { pauseSong, playSong } = usePlayer();

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: 'smooth' });
  });

  const topPlays = data?.items?.slice(0, 5);

  const handlePauseClick = () => {
    pauseSong();
  };

  const handlePlayClick = (song, index) => {
    playSong({ song, data, index });
  };

  return (
    <div
      ref={divRef}
      className="xl:m-6 ml-0 xl:mb-0 mb-6 flex-1 xl:max-w-[500px]
      max-w-full flex flex-col"
    >
      <div className="w-full flex flex-col">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-primary font-bold text-2xl">Top Global</h2>
          <Link to="/top-charts">
            <p className="text-gray-300 text-base cursor-pointer">See more</p>
          </Link>
        </div>

        <div className="mt-4 flex flex-col gap-1">
          {topPlays?.map((item, index) => (
            <TopChartCard
              key={item.track.id}
              song={item.track}
              index={index}
              isPlaying={isPlaying}
              activeSong={activeSong}
              handlePauseClick={handlePauseClick}
              handlePlayClick={() => handlePlayClick(item.track, index)}
            />
          ))}
        </div>
      </div>

      <div className="w-full flex flex-col mt-8">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-primary font-bold text-2xl">Top Artists</h2>
          <Link to="/top-charts">
            <p className="text-gray-300 text-base cursor-pointer">See more</p>
          </Link>
        </div>

        <Swiper
          slidesPerView="auto"
          spaceBetween={15}
          freeMode
          centeredSlides
          centeredSlidesBounds
          modules={[FreeMode]}
          className="mt-4"
        >
          {topPlays?.map((item) => (
            <SwiperSlide
              key={item?.track?.id}
              style={{ width: '25%', height: 'auto' }}
              className="shadow-lg rounded-full animate-slideright"
            >
              <Link to={`/artists/${item?.track.album.artists[0].id}`}>
                <img
                  src={item?.track.album.images[0].url}
                  alt="artist"
                  className="rounded-full w-full object-cover"
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TopPlay;
