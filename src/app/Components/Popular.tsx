"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Moviecart } from "./MovieCard";
export const Popular = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const getPopular = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}movie/popular?language=en-US&page=1`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
          },
        }
      );
      const data = await response.json();
      setPopularMovies(data.results || []);
    } catch (error) {
      console.error("Failed to fetch popular movies:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPopular();
  }, []);

  return (
    <div className="px-5">
      <div className="flex justify-between items-center h-[36px] w-full mb-4">
        <h3 className="text-2xl font-semibold pl-3">Popular</h3>
        <Link href="/category/Popular">
          <button className="flex items-center py-2 px-4 gap-1 text-sm font-medium">
            See More <ArrowRight className="h-[16px] w-[16px]" />
          </button>
        </Link>
      </div>

      {loading ? (
        <div className="text-center py-10 text-gray-500">Loading...</div>
      ) : (
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {popularMovies.slice(0, 9).map((movie) => (
            <Moviecart key={movie} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};
