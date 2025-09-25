export default function MovieCard({ movie }) {
  return (
    <div className="relative w-[280px] h-[400px] bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 cursor-pointer">
      {/* Poster */}
      <img
        className="w-full h-full object-cover"
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/400"
        }
        alt={movie.Title}
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>

      {/* Info Section */}
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <p className="text-sm opacity-80">{movie.Year}</p>
        <h3 className="text-lg font-bold truncate">{movie.Title}</h3>
        <span className="text-xs uppercase tracking-wide text-blue-300">
          {movie.Type}
        </span>
      </div>
    </div>
  );
}
