import Image from "next/image";
import { Header } from "./Components/Header";
import { MovieCarousel } from "./Components/MovieCarousel";
import { Upcoming } from "./Components/Upcoming";

export default function Home() {
  return (
    <div>
      <MovieCarousel />
      <upComingMovie />
    </div>
  );
}
