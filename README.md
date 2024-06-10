# Personal Bookshelf

This is a React application that allows users to search for books using the Open Library API and maintain a personal bookshelf in the browser using localStorage.

## Features

- **Book Search Page**: 
  - Real-time search for books using the Open Library API.
  - Display search results in a list of cards.
  - Add books to a personal bookshelf.

- **Personal Bookshelf Page**:
  - View books added to the personal bookshelf.
  - Remove books from the personal bookshelf.
  - Persistent storage using localStorage.

## Tech Stack

- **React**: Frontend library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Axios**: Promise-based HTTP client for making API requests.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (version 14 or higher)
- npm (version 6 or higher)

## Setup

To set up the project locally, follow these steps:

1. **Clone the repository**:

    ```bash
    git clone https://github.com/DevVaradPatil/book-store
    ```

2. **Navigate to the project directory**:

    ```bash
    cd personal-bookshelf
    ```

3. **Install dependencies**:

    ```bash
    npm install
    ```

## Running the Application

To run the application on your local machine, follow these steps:

1. **Start the development server**:

    ```bash
    npm start
    ```

2. **Open your browser** and navigate to:

    ```
    http://localhost:3000
    ```

## Folder Structure

The project structure is as follows:

personal-bookshelf/
├── node_modules/
├── public/
│ ├── index.html
│ └── ...
├── src/
│ ├── components/
│ │ ├── Navbar.js
│ │ ├── SearchPage.js
│ │ └── BookshelfPage.js
│ ├── App.js
│ ├── index.css
│ ├── index.js
│ └── ...
├── .gitignore
├── package-lock.json
├── package.json
└── README.md


## Components

- **Navbar**: Contains navigation links to the search page and the bookshelf page.
- **SearchPage**: Allows users to search for books and add them to their personal bookshelf.
- **BookshelfPage**: Displays books added to the personal bookshelf and allows removal of books.

## API

The application uses the Open Library API to fetch book data. The API endpoint used for searching books is:

https://openlibrary.org/search.json?q=YOUR_QUERY&limit=10&page=1


## Styling

The application uses Tailwind CSS for styling. Tailwind is a utility-first CSS framework that allows for rapid UI development.

---

Thank you for checking out the Personal Bookshelf project!
