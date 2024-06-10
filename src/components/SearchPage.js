import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LoadingSpinner from './LoadingSpinner';
import { IoAdd , IoCheckmark} from "react-icons/io5";

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [bookshelf, setBookshelf] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const storedBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBookshelf(storedBookshelf);
  }, []);

  const searchBooks = async (e) => {
    setQuery(e.target.value);
    if (e.target.value.length > 2) {
      setLoading(true);
      const response = await axios.get(`https://openlibrary.org/search.json?q=${e.target.value}&limit=10&page=1`);
      setResults(response.data.docs);
      setLoading(false);
    } else {
      setResults([]);
    }
  };

  const addToBookshelf = (book) => {
    let updatedBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    if (!isBookInBookshelf(book, updatedBookshelf)) {
      updatedBookshelf.push(book);
      localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
      setBookshelf(updatedBookshelf);
    }
  };

  const isBookInBookshelf = (book, bookshelf) => {
    return bookshelf.some(b => b.key === book.key);
  };

  const truncateText = (text, length) => {
    return text.length > length ? text.substring(0, length) + '...' : text;
  };

  return (
    <div className="p-4 mt-5">
      <div className='w-full flex justify-center items-center'>  
        <input
          type="text"
          value={query}
          onChange={searchBooks}
          placeholder="Search for books"
          className="border py-3 bg-neutral-100 px-4 rounded-md w-full max-w-3xl"
        />
      </div>
      {loading ? (
        <div className="flex justify-center items-center mt-4">
          <LoadingSpinner/>
        </div>
      ) : (
        <div className="mt-4 flex justify-center items-center flex-wrap gap-3">
          {results.map((book) => (
            <div key={book.key} className="border p-4 mb-4 rounded-md w-[300px] h-[200px] flex items-start justify-between flex-col transition-all duration-200 hover:scale-[1.02] hover:bg-neutral-100 hover:shadow-md">
              <div className='flex flex-col'>
                <h3 className="font-medium text-lg"><span className='font-bold'>Title:</span>  {book.title}</h3>
                <p>{book.author_name ? truncateText(book.author_name.join(', '), 50) : 'Unknown Author'}</p>
              </div>
              {isBookInBookshelf(book, bookshelf) ? (
                <button className="bg-green-500 text-white flex items-center gap-1 p-2 mt-2 px-4 rounded-sm cursor-not-allowed"><IoCheckmark className='text-xl'/> Already in Bookshelf</button>
              ) : (
                <button onClick={() => addToBookshelf(book)} className="bg-blue-500 flex items-center gap-1 text-white p-2 mt-2 px-4 rounded-sm hover:bg-blue-600 transition-all duration-200"><IoAdd className='text-xl'/> Add to Bookshelf</button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
