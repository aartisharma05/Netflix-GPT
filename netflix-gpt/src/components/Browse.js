import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();
  useUpcomingMovies();
  
  return (
    <div>
      <Header />
      
        
    {/* /*

     MainContainer
      - VideoBackground
      - VideoTitle

      SecondaryContainer
      - MovieList *n
       - cards * n

    */ }
      
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  );
}

export default Browse;
