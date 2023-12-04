import { useState , useRef} from "react";
import Header from "./Header";
import {checkValidData} from "../utils/validate"
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);//name validation
  const email = useRef(null);
  const password = useRef(null);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = ()=>{
    //validate form data
  // checkValidData(email, password)
  console.log(email.current.value);
  console.log(password.current.value);

  const message = checkValidData(email.current.valuel, password.current.value);
  setErrorMessage(message);




  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/ee951142-2027-4179-ae6c-71f83929c30f/US-en-20231120-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="logo"
        />
      </div>

      <form onSubmit = {(e)=>e.preventDefault()}  className="absolute w-1/4 bg-black mx-auto right-0 left-0 p-12 my-36 bg-opacity-90 rounded-md">
        <h1 className="font-bold text-white text-2xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 my-2 w-full bg-gray-700 rounded-md "
          />
        )}
        <input
        ref={email}
          type="text"
          placeholder="Email Address"
          className="p-2 my-2 w-full bg-gray-700 rounded-md "
          
        />
        <input
        ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-2 w-full bg-gray-700 rounded-md "
        />
        <p className="text-red-700 text-lg p-1">{errorMessage}</p>
        <button className="p-4 my-4 bg-red-700 text-white rounded-md w-full" onClick={handleButtonClick}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer text-white" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already regstered? Sign In Now..."}
        </p>
      </form>
    </div>
  );
};

export default Login;
