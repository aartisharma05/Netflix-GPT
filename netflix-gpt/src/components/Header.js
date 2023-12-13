import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {auth} from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import {LOGO} from "../utils/constants"
import { toggleGptSearchView } from "../utils/gptSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store=> store.user);


  const handleSignOut = ()=>{
    signOut(auth)
      .then(() => { })
      .catch((error) => {
      navigate("/error");
        // An error happened.
      });
  }

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const { uid, email, displayName, photoURL } = user;
          dispatch(
            addUser({
              uid: uid,
              email: email,
              displayName: displayName,
              photoURL: photoURL,
            })
          );
            navigate("/browse");
        } else {
          dispatch(removeUser());
          navigate("/");
        }
      });
    
    //Unsubsribe when component unmounts
      return () => unsubscribe();
    }, []);
    
   const handleGptSearchClick = ()=>{
      //Toggle GPT Search
      dispatch(toggleGptSearchView());
   }

  return (
    <div className="absolute flex items-center justify-between bg-gradient-to-b from-black w-screen py-2 px-8 z-10">
      <img
        src={LOGO}
        alt="logo"
        className="w-44"
      />
      {user && (
        <div className="flex space-x-1">
          <button className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg"
          onClick={handleGptSearchClick}>GPT Search</button>
          <img
            className="w-12 h-12 rounded-md shadow-lg z-10"
            alt="usericon"
            src={user.photoURL}
          />
          <button onClick={handleSignOut} className="font-bold text-white">
            (Sign out)
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;
