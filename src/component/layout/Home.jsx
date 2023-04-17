import React from 'react'
import Header from '../header/Header'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Header />
      <div className='container mx-auto lg:w-[90%]'>
        <Outlet />
      </div>
    </div>
  );
}

export default Home