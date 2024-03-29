import { Error, Loader, SongCard } from '../components';
import { genres } from '../assets/constants';

import { useGetGlobalTopSongsQuery } from '../redux/services/spotifyAPI';

const Discover = () => {
  const { data, isFetching, error } = useGetGlobalTopSongsQuery();
  const genreTitle = 'Pop';

  if (isFetching) return <Loader title="Loading songs" />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <div className=" flex justify-center items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-primary text-left sm:mr-10 ">
          Discover {genreTitle}
        </h2>
        <select
          className="bg-secundary text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
          onChange={() => {}}
          value=""
        >
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-wrap sm:justify-center justify-center gap-8">
        {data.items?.map((item, index) => (
          <SongCard
            key={item.track.id}
            song={item.track}
            data={data}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Discover;
