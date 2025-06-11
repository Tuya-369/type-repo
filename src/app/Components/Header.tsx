import { HomeIcon } from "lucide-react";
import Link from "next/link";
import { HeaderGenre } from "./HeaderGenre";

export const Header = () => {
  return (
    <div className="flex gap-3 my-3 max-w-[1280px] mx-auto">
      <Link href={`/`}>
        <div className="ml-2 text-blue-800 fill-blue-800 ">
          <HomeIcon />
        </div>
        <h1 className="">Home</h1>
      </Link>
      <div className="ml-100 ">
        <HeaderGenre />
      </div>
      {/* <HeaderSearch /> */}
    </div>
  );
};
