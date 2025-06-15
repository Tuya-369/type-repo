"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LouderCard } from "@/components/louder/Louder.Card";
import { Moviecart } from "@/components/MovieCard";

export const TopRated = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const getTopRated = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}movie/top_rated?language=en-US&page=1`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
          },
        }
      );
      const data = await response.json();
      setTopRatedMovies(data.results || []);
    } catch (error) {
      console.error("Failed to fetch top rated movies:", error);
    } finally {
      setLoading(false); // ✅ энд өмнө нь setLoading(true) байсан
    }
  };

  useEffect(() => {
    getTopRated();
  }, []);

  return (
    <div className="px-5">
      <div className="flex justify-between items-center h-[36px] w-full mb-4">
        <h3 className="text-2xl font-semibold pl-3">Top Rated</h3>
        <Link href="/category/Topratting">
          <button className="flex items-center py-2 px-4 gap-1 text-sm font-medium">
            See More <ArrowRight className="h-[16px] w-[16px]" />
          </button>
        </Link>
      </div>

      {loading ? (
        <LouderCard /> // Optional: Та ачааллаж буй үедээ ийм зүйл харуулахыг хүсч байж магадгүй
      ) : (
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {topRatedMovies.slice(0, 9).map((movie) => (
            <Moviecart key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};
