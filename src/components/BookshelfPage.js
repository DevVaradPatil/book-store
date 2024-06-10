import React, { useState, useEffect } from 'react';
import { IoTrash } from "react-icons/io5";

const BookshelfPage = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const storedBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBookshelf(storedBookshelf);
  }, []);

  const removeFromBookshelf = (bookToRemove) => {
    const updatedBookshelf = bookshelf.filter(book => book.key !== bookToRemove.key);
    setBookshelf(updatedBookshelf);
    localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
  };

  return (
    <div className="p-4 mt-5">
      <div className='w-full flex justify-center items-center'>
      <h1 className="text-3xl font-bold mb-4">My Bookshelf</h1>
      </div>
      <div className='flex justify-start xs:justify-center items-center flex-wrap gap-3'>
      {bookshelf.length > 0 ? (
        bookshelf.map((book) => (
          <div key={book.key} className="border p-4 mb-4 rounded-md w-[300px] h-[200px] flex items-start justify-between flex-col transition-all duration-200 hover:scale-[1.02] hover:bg-neutral-100 hover:shadow-md">
            <div className='flex flex-col'>
              <h3 className="font-bold">{book.title}</h3>
              <p>{book.author_name ? book.author_name.join(', ') : 'Unknown Author'}</p>
            </div>
            <button 
              onClick={() => removeFromBookshelf(book)} 
              className="bg-red-500 flex items-center gap-1 text-white p-2 mt-2 px-4 rounded-sm hover:bg-red-600 transition-all duration-200"
            >
             <IoTrash className='text-lg'/> Remove from Bookshelf
            </button>
          </div>
        ))
      ) : (
        <p>No books added to the bookshelf yet.</p>
      )}
      </div>
    </div>
  );
};

export default BookshelfPage;
