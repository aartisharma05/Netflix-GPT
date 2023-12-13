import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar"
import { BG_URL } from "../utils/constants"

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={BG_URL} alt="logo" className="min-h-screen w-full" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
}

export default GptSearch;
