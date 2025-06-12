// import { Badge } from "@/components/ui/badge";
// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";

// export const AllGenres = () => {
//   const router = useRouter();
//   const [genres, setGenres] = useState([]);
//   const [genreIds, setGenreIds] = useState([]);

//   const getMovieGenres = async () => {
//     try {
//       const response = await fetch(
//         `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}genre/movie/list?language=en`,
//         {
//           method: "GET",
//           headers: {
//             accept: "application/json",
//             Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
//           },
//         }
//       );
//       const movies = await response.json();
//       setGenres(movies.genres || []);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getMovieGenres();
//   }, []);

//   const handleSelectGenre = (id, name) => {
//     const updatedIds = [...new Set([...genreIds, id])];
//     setGenreIds(updatedIds);
//     router.push(`/genres?genreIds=${updatedIds.join(",")}&name=${name}`);
//   };
//   return (
//     <div className="flex flex-wrap gap-3">
//       {genres.map((genre) => (
//         <Badge
//           key={genre.id}
//           className="bg-white text-foreground text-[12px] font-semibold border hover:bg-gray-100 cursor-pointer"
//           onClick={() => handleSelectGenre(genre.id, genre.name)}
//         >
//           {genre.name}
//         </Badge>
//       ))}
//     </div>
//   );
// };
