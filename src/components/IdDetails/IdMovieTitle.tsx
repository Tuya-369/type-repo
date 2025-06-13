import { MovieType } from "@/types";
import { StarIcon } from "lucide-react";

export const Title = ({ movie }: { movie: MovieType | undefined }) => {
  return (
    <div className="mb-6">
      <h1 className="text-4xl font-bold">{movie?.title}</h1>
      <p className=" text-sm mt-1">{movie?.release_date}</p>
      <p className="text gray w-[150px] h-]280px] flex justify center">
        {" "}
        {movie?.runtime}-minute
      </p>
      <div className="flex items-center gap-2 text-yellow-500 mt-2">
        <StarIcon className="w-5 h-5 fill-yellow-500" />
        <p className="text-base font-medium">
          {movie?.vote_average?.toFixed(1)}
        </p>
      </div>
    </div>
  );
};
