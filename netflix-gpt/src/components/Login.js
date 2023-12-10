import { useState , useRef} from "react";
import Header from "./Header";
import {checkValidData} from "../utils/validate"
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,

} from "firebase/auth";
import {auth} from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";


const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const name = useRef(null);//name validation
  const email = useRef(null);
  const password = useRef(null);



  const handleButtonClick = ()=>{

  const message = checkValidData(email.current.value, password.current.value);
  setErrorMessage(message);

   if(message) return;

   //sign In or Sign up logic
   if(!isSignInForm){

    //sign Up Logic

    createUserWithEmailAndPassword(
      auth,
      email.current.value,  
      password.current.value
    )
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name.current.value,
          photoURL:
            "https://avatars.githubusercontent.com/u/120464099?s=400&u=cd06e215c8bd4f6c3144f36a08a5baf3e66cfadd&v=4",
        })
          .then(() => {
           
             const { uid, email, displayName, photoURL } = auth.currentUser;
             dispatch(
               addUser({
                 uid: uid,
                 email: email,
                 displayName: displayName,
                 photoURL: photoURL,
               })
             );

            navigate("/browse");
          })
          .catch((error) => {
            // An error occurred
            // ...
            setErrorMessage(error.message);
          });


        console.log(user);
        navigate("/browse")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "-" +errorMessage)
        // ..
      });

   }
   else{
    //sign In logic
    signInWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user)
          navigate("/browse");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode,errorMessage)
        
      });

   }
 


  }
    
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/ee951142-2027-4179-ae6c-71f83929c30f/US-en-20231120-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="logo"
          className="min-h-screen w-full"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-1/2 md:w-1/4 h-3/4 bg-black mx-auto right-0 left-0 p-12 my-36 bg-opacity-90 rounded-md"
      >
        <h1 className="font-bold text-white text-2xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
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
        <button
          className="p-4 my-4 bg-red-700 text-white rounded-md w-full"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="py-4 cursor-pointer text-white"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already regstered? Sign In Now..."}
        </p>
      </form>
    </div>
  );
};

export default Login;



