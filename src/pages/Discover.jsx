import { genres } from "../assets/constants";
import { useState } from "react";
import { Error } from "./../components";
import {
  useGetRandomAcotrQuery,
  useGetTitlesQuery,
} from "../redux/services/MovieCoreApi";
import { Loader } from "../components";
const Discover = () => {
  // console.log(useGetRandomAcotrQuery);

  const { data, isFetching, error } = useGetTitlesQuery();
  console.log(data, error);
  const [Gerne, setGerne] = useState("");
  if (isFetching) return <Loader />;
  if (error) return <Error />;

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
        <div className="mt-5 flex  flex-row flex-wrap md:justify-start justify-center"></div>
      </div>
      {/*  */}
    </div>
  );
};

export default Discover;
