import { useEffect, useState } from "react";
import { getproducNAmeID } from "@/getproducNAmeID";

export const DirectorName = ({ movie }) => {
  const [director, setDirector] = useState("");
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const getMovieData = async () => {
      const { director, stars } = await getproducNAmeID(movie);
      setDirector(director?.name || "N/A");
      setStars(stars || []);
    };

    if (movie) getMovieData();
  }, [movie]);

  return (
    <div className="text-[16px] divide-y divide-gray-200 mt-6">
      <div className="flex gap-2 py-2">
        <span className="font-semibold w-[80px]">Director:</span>
        <span>{director}</span>
      </div>
      <div className="flex gap-2 py-2">
        <span className="font-semibold w-[80px]">Writers:</span>
        <span>Winnie Holzman · Dana Fox · Gregory Maguire</span>
      </div>
      <div className="flex gap-2 py-2">
        <span className="font-semibold w-[80px]">Stars:</span>
        <span>{stars.join(" · ")}</span>
      </div>
    </div>
  );
};
