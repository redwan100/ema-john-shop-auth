import React, { useContext } from 'react';
import logo from '../../images/Logo.svg'
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const Header = () => {
    const {user, logOut} = useContext(AuthContext)

    const handleLogOut = () =>{
        logOut()
        .then(result=> console.log(result))
        .catch(error=>console.log(error.message))
    }

    return (
      <nav className="flex justify-between items-center bg-[#1C2B35] py-3 sticky top-0 left-0 z-50">
        <img className="pl-16" src={logo} alt="" />
        <div className="text-white pr-16">
          <NavLink to={"/"} className="ml-5">
            Shop
          </NavLink>
          <NavLink to={"/orders"} className="ml-5">
            Orders
          </NavLink>
          <NavLink to={"/inventory"} className="ml-5">
            Inventory
          </NavLink>
          <NavLink to={"/login"} className="ml-5">
            Login
          </NavLink>
          <NavLink to={"/signup"} className="ml-5">
            Sign up
          </NavLink>

          {user && (
            <p className='inline-block'>
              <small className="ml-5">{user.email}</small>
              <button onClick={handleLogOut} className='bg-white text-gray-800 py-1 px-3 rounded-md'>Log out</button>
            </p>
          )}
        </div>
      </nav>
    );
};

export default Header;