import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchPage from './components/SearchPage';
import BookshelfPage from './components/BookshelfPage';
import Navbar from './components/Navbar';


const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/bookshelf" element={<BookshelfPage />} />
      </Routes>
    </Router>
  );
};

export default App;

