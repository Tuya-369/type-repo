import { SearchResultCard } from "./SearchResultCard";

interface Movie {
  id: number;
  original_title: string;
  poster_path: string | null;
  popularity: number;
  release_date: string;
  // нэмэлт талбарууд
}

interface MovieResponse {
  results: Movie[];
}

interface SearchResultProps {
  movies: MovieResponse;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchResult = ({ movies, setSearchValue }: SearchResultProps) => {
  return (
    <div className="absolute z-50 p-3 border rounded-lg top-12 bg-background">
      {movies.results
        .slice(0, 5)
        .map((movie) => (
          <SearchResultCard
            key={movie.id}
            movie={movie}
            setSearchValue={setSearchValue}
          />
        ))}
    </div>
  );
};
