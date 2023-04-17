import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const Register = () => {
  const [error, setError] = useState('')
  const {createUser} = useContext(AuthContext)

  const handleRegister = (event) =>{
    event.preventDefault();
    const form = event.target;
    const userName = form.username.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    console.log(confirmPassword);

    // reset error 
    setError('')

    // checking validation 
    if (password.length < 6) {
      setError("password must be at least 6 characters");
    }
    if(password !== confirmPassword){
      setError('Password do not match')
      return;
    }


    createUser(email, password)
    .then(result=>{
      const loggedUser = result.user
      console.log(loggedUser);
      form.reset()
    })
    .catch(error=>setError(error.message))
    

  }
  return (
    <form
      className="max-w-sm mx-auto border p-8 m-4 rounded-md"
      onSubmit={handleRegister}
    >
      <h1 className="text-center text-3xl mb-3">Sign Up</h1>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="username"
        >
          Username
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="username"
          id="username"
          type="text"
          placeholder="Enter your username"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="email"
          id="email"
          type="email"
          placeholder="Enter your email"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="password"
          id="password"
          type="password"
          placeholder="Enter your password"
        />
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="confirm-password"
        >
          Confirm Password
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="confirmPassword"
          id="confirm-password"
          type="password"
          placeholder="Confirm your password"
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-orange-400/60 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline duration w-full hover:bg-orange-300"
          type="submit"
        >
          Sign up
        </button>
      </div>
      <div className="mt-2 text-center">
        <small>
          Already have an account?{" "}
          <span className="text-blue-500">
            <Link to={"/login"}>Login</Link>
          </span>
        </small>
      </div>

      {/* ========== Show Error============ */}
      <small className='text-rose-500 block mt-3 text-center'>{error}</small>
    </form>
  );
}

export default Register