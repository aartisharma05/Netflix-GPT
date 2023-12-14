import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {

  const movies = useSelector(store=> store.movies);
  return (
    movies.nowPlayingMovies && (
      <div className="bg-black w-screen ">
        <div className="mt-0 sm:-mt-40 md:-mt-50 lg:pl-12 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"Trending"} movies={movies.trendingMovies} />
          <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />  
        </div>
      </div>
    )
  );
}

export default SecondaryContainer;
