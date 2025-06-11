"use client";
import { getNowPlaying } from "@/lib/Api/getNowPlaying";
import { MovieType } from "@/types";
import { useEffect, useState } from "react";
import { MovieCarouselItem } from "./MovieCarouselItem";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const MovieCarousel = () => {
  const [nowPlaying, setNowPlaying] = useState<MovieType[]>([]);
  useEffect(() => {
    const getCarousel = async () => {
      const data = await getNowPlaying();
      setNowPlaying(data?.results);
    };
    getCarousel();
  }, []);

  return (
    <Carousel
      className="relative w-full"
      // plugins={[
      //   Autoplay({
      //     delay: 5000,
      //   }),
      // ]}
    >
      <CarouselContent>
        {nowPlaying?.slice(0, 4).map((movie, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <MovieCarouselItem movie={movie} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="md:left-10 " />
      <CarouselNext className="md:right-10" />
    </Carousel>
  );
};
