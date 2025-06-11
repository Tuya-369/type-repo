import { MovieType } from "@/types";
import { Star } from "lucide-react";
export const Moviecart = ({ movie }: { movie: MovieType }) => {
  return (
    <div className="w-fit">
      <img
        src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
        className="h-[331px] w-[165px] rounded-t-lg md:h-[340px] md:w-[230px]"
      ></img>
      <div className="w-[158px] bg-gray-300 rounded-b-lg  md:w-[230px]">
        <div className="flex p-2">
          <Star className="text-yellow-300 fill-yellow-300 " />
          <p className="w-[36] h-[16] pl-6px">7</p>
          <Star className="text-yellow-300 fill-yellow-300 mr-1" size={16} />
        </div>
        <div>
          <p className=" h-[40px] text-[14px] font-normal pl-2">
            {movie?.title}
          </p>
        </div>
      </div>
    </div>
  );
};
