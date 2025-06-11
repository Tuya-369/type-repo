import Link from "next/link";

import { Moviecart } from "./MovieCard";
import { ArrowRight } from "lucide-react";
import { LouderCard } from "./louder/Louder.Card";

export const upComingMovie = () => {
  return (
    <div className="px-5">
      <div className="flex justify-between items-center h-[36px] w-full mb-4">
        <h3 className="text-2xl font-semibold pl-3">Upcoming</h3>
        <Link href="/category/Upcoming">
          <button className=" text-blue-600 flex items-center py-2 px-4 gap-1 text-sm font-medium">
            See More <ArrowRight className="h-[16px] w-[16px]" />
          </button>
        </Link>
      </div>{" "}
      <div className="text-center py-10 text-gray-500"></div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {loading ? (
          <LouderCard />
        ) : (
          upComingMovie.map((movie) => (
            <Moviecart key={movie.id} movie={movie} />
          ))
        )}
      </div>
    </div>
  );
};
