import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import { BG_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <div className="">
      <div className="fixed -z-10">
        <img
          src={BG_URL}
          alt="logo"
          className="h-screen object-cover sm:w-screen "
        />
      </div>

      <div className="pt-[44%] sm:pt-[23%] md:pt-0">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </div>
  );
};

export default GptSearch;
