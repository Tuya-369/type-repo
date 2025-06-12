import Image from "next/image";
import { Header } from "./Components/Header";
import { MovieCarousel } from "./Components/MovieCarousel";
import { UpcomingMovie } from "./Components/Upcoming";
import { TopRated } from "./Components/TopRatting";
import { Popular } from "./Components/Popular";

export default function Home() {
  return (
    <div className="container mx-auto overflow-hidden">
      <MovieCarousel />
      <UpcomingMovie />
      <Popular />
      <TopRated />
    </div>
  );
}
