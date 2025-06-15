import { HomeIcon } from "lucide-react";
import Link from "next/link";
import { HeaderGenre } from "../components/HeaderGenre";
import { HeaderSearch } from "./search/Search";

export const Header = () => {
  return (
    <div className="flex gap-3 my-3 max-w-[1280px] mx-auto items-center">
      <Link href="/" className="flex items-center space-x-2 ml-2 text-blue-800">
        <HomeIcon />
        <h1 className="">Home</h1>
      </Link>
      <div className="ml-24">
        <HeaderGenre />
      </div>
      <HeaderSearch />
    </div>
  );
};
