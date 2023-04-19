import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye,faEyeSlash} from '@fortawesome/free-solid-svg-icons';


const Login = () => {
  const [show, setShow] = useState(false)
const [error, setError] = useState('')

const navigate = useNavigate()
const location = useLocation()
const {signIn} = useContext(AuthContext)

const from =location?.state?.from?.pathname || '/'

  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    // reset error
    setError("");


    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        form.reset()
        navigate(from,{replace:true})
      })
      .catch((error) => setError(error.message));
  };


  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="w-full max-w-md">
        <form
          className="border shadow-sm rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSignIn}
        >
          <h1 className="text-center text-3xl font-semibold mb-3">
            Please Login
          </h1>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="username"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="email"
              id="email"
              type="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-6 relative">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              name="password"
              id="password"
              type={show ? "text" : "password"}
              placeholder="**********"
              required
            />
            <FontAwesomeIcon
              className="absolute right-4 bottom-6 opacity-60 cursor-pointer"
              icon={faEye}
            />

            <p onClick={() => setShow(!show)}>
              {" "}
              {show ? (
                <span>
                  <FontAwesomeIcon
                    className="absolute right-4 bottom-6 opacity-20 cursor-pointer"
                    icon={faEye}
                  />
                </span>
              ) : (
                <span>
                  {" "}
                  <FontAwesomeIcon
                    className="absolute right-4 bottom-6 opacity-20 cursor-pointer"
                    icon={faEyeSlash}
                  />
                </span>
              )}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="w-full bg-orange-300 text-gray-800 hover:bg-orange-300/90 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
          </div>
          <div className="mt-2 text-center">
            <small>
              New to Ema-john?{" "}
              <span className="text-blue-500">
                <Link to={"/signup"}>Create New Account</Link>
              </span>
            </small>
          </div>
          <small className="text-rose-500 text-center block mt-2">
            {error && error}
          </small>
        </form>
      </div>
    </div>
  );
}

export default Login