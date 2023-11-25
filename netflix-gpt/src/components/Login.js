
import Header from "./Header";
const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/ee951142-2027-4179-ae6c-71f83929c30f/US-en-20231120-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="logo"
        />
      </div>

      <form className="absolute w-1/4 bg-black mx-auto right-0 left-0 p-12 my-36">
        <h1 className="font-bold text-white text-2xl">Sign In</h1>
        <input type="text" placeholder="Email Address" className="py-2 m-2 w-full" />
        <input type="password" placeholder="Password" className="py-2 m-2 w-full" />
        <button className="p-4 m-4 bg-red-700 text-white rounded-md w-full">
          Sing In
        </button>
      </form>
    </div>
  );
}

export default Login;
