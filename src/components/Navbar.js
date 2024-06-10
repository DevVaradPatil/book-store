import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/magic-book.png'
import { IoSearch, IoBookSharp } from "react-icons/io5";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="bg-gray-800 p-4 flex items-center justify-between">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />
        <h1 className="text-white text-xl font-medium ml-2">Varad's Book Store</h1>
      </div>
      <div className="flex space-x-4">
        <Link to="/" className={`py-2 flex gap-1 items-center justify-center px-4 rounded ${location.pathname === '/' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300'}`}>
         <IoSearch/> <span className='xs:hidden'>Search</span> 
        </Link>
        <Link to="/bookshelf" className={`py-2 flex gap-1 items-center justify-center px-4 rounded ${location.pathname === '/bookshelf' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300'}`}>
         <IoBookSharp/> <span className='xs:hidden'> My Bookshelf</span> 
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
