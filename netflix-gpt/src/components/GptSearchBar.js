import openai from "../utils/openai"
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants"
import { useRef } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";
const GptSearchBar = () => {

  const dispatch = useDispatch(); 
  const langKey = useSelector(store => store.config.lang);
  const searchText = useRef(null);

  //search movie in TMDB 
const searchMovieTMDB = async(movie)=>{
 const data = await fetch(
   "https://api.themoviedb.org/3/search/movie?query=" + 
   movie + "&include_adult=false&language=en-US&page=1",
   API_OPTIONS
 );

 const json = await data.json();
 return json.results;
}

  const handleGptSearchClick = async()=>{
    console.log(searchText.current.value);
    //make an api call to GPT API and get movie results

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query: " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResults.choices) {
      const err = "GPT API Failed";
      return err;
    }
    console.log(gptResults.choices?.[0]?.message.content);
    // gptMovies: "Andaz Apna Apna, Chupke Chupke, Padosan, Jaane Bhi Do Yaaro, Chalti Ka Naam Gaadi";
    const gptMovies = gptResults.choices?.[0]?.message.content.split(",");

    //[Andaz Apna Apna, Chupke Chupke, Padosan, Jaane Bhi Do Yaaro, Chalti Ka Naam Gaadi]
    //for each movie search TMDB Api
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    // [Promise, Promise, Promise, Promise, Promise]

     const tmdbResults = await Promise.all(promiseArray);
     console.log(tmdbResults);

     dispatch(addGptMovieResult({movieNames: gptMovies, movieResults: tmdbResults}));
  }
  return (
    <div className=" md:pt-[15%] px-1 flex justify-center ">
      <form className=" w-full lg:w-1/2 bg-black grid grid-cols-12 rounded-lg" onSubmit={(e)=>e.preventDefault()}>
        <input
        ref={searchText}
          type="text"
          className="p-4 m-4 text-xs sm:text-lg col-span-9 rounded-lg"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="col-span-3 p-1 my-4 mx-2 sm:py-2 sm:px-4 sm:m-4 bg-red-700 text-white rounded-lg"
        onClick={handleGptSearchClick} >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
}

export default GptSearchBar;
