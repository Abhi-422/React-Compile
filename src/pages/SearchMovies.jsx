import { useState, useEffect } from "react";
import Input from "../components/moviesApp/Input";
import MovieCard from "../components/moviesApp/MovieCard";
import SearchIcon from "/search.svg";

const API_KEY = import.meta.env.VITE_MOVIE_API_KEY;
const API_URL = `https://www.omdbapi.com?apikey=${API_KEY}`;

const SearchMovies = () => {
  const [input, setInput] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleOnChange = (e) => setInput(e.target.value);

  const searchMovies = async (title) => {
    if (!title) return;
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();

      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        setMovies([]);
      }
    } catch (err) {
      console.error("Error fetching movies:", err);
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    searchMovies("tiger");
  }, []);

  return (
    <div className="px-6 mt-20">
      <div className="flex items-center justify-center">
        <div className="flex items-center w-full max-w-2xl rounded-full bg-white shadow-lg border border-gray-200 px-4 py-2">
          <Input
            className="flex-1 px-3 py-2 text-gray-700 bg-transparent outline-none placeholder-gray-400"
            value={input}
            onChange={handleOnChange}
            placeholder="Search movies by title..."
            onKeyDown={(e) => e.key === "Enter" && searchMovies(input)}
          />
          <button
            onClick={() => searchMovies(input)}
            className="ml-2 p-2  rounded-full transition"
          >
            <img
              className="w-5 h-5 hover:scale-[1.1] invert"
              src={SearchIcon}
              alt="search"
            />
          </button>
        </div>
      </div>

      <div className="mt-12">
        {loading ? (
          <div className="flex items-center justify-center text-gray-600 text-lg">
            Loading movies...
          </div>
        ) : movies.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {movies.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))}
          </div>
        ) : (
          <div className="h-[40vh] flex items-center justify-center">
            <h2 className="text-xl font-semibold text-gray-500">
              🎬 No Movies Found. Try another search.
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchMovies;
