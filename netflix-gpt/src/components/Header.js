import {signOut} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {auth} from "../utils/firebase";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store=> store.user);
  console.log(user);

  const handleSignOut = ()=>{
    signOut(auth)
      .then(() => {
        navigate("/");
        // Sign-out successful.
      })
      .catch((error) => {
      navigate("/error");
        // An error happened.
      });
  }

  return (
    <div className="absolute flex items-center justify-between bg-gradient-to-b from-black w-screen py-2 px-8 z-10">
      <img
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
        className="w-44"
      />
      {user && (
        <div className="flex space-x-1">
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
