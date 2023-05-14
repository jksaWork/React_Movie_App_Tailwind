import { genres } from "../assets/constants";
import { useState } from "react";
import { Error, MovieCard } from "./../components";
import { useDispatch, useSelector } from "react-redux";

import {
  useGetRandomAcotrQuery,
  useGetTitlesQuery,
} from "../redux/services/MovieCoreApi";
import { Loader } from "../components";
const Discover = () => {
  const dispatch = useDispatch();
  const { genreListId } = useSelector((state) => state.player);
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetTitlesQuery();
  const [Gerne, setGerne] = useState("");

  if (isFetching) return <Loader />;
  if (error) return <Error />;
  console.log(activeSong);

  return (
    <div>
      {/*  */}
      <div className="flex flex-col">
        <div className="flex sm:flex-row flex-col items-center justify-between">
          <h3 className=" font-bold text-xl text-white">
            {/*  */}
            Discover {Gerne}
          </h3>
          <select
            onChange={(e) => setGerne(e.target.value)}
            className="bg-black text-gray-300 outline-none sm:mt-0 mt-5 p-3 text-sm rounded-lg "
          >
            {genres.map((genre) => (
              <option value={genre.value} key={genre.value}>
                {genre.title}
              </option>
            ))}
          </select>
        </div>
        <div className="mt-5 flex gap-4  flex-row flex-wrap md:justify-start justify-center">
          {data.results.map((el, index) => (
            <MovieCard
              key={index}
              movie={el}
              activeSong={activeSong}
              isPlaying={isPlaying}
            />
          ))}
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default Discover;
