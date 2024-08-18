import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../../api/BooksAPI";
import Books from "../Books/Books";
import QueryBooks from "./QueryBooks";

/**
 * @description Represents the search page where users can find and categorize books
 * @returns {JSX.Element} The SearchBooks component
 */
const SearchBooks = () => {
  const [qBooks, setQ] = useState([]);
  const [myBooks, setMyBooks] = useState([]);

  useEffect(() => {
    let mounted = true;

    /**
     * @description Fetches the user's books and sets them in state
     */
    const getMyBooks = async () => {
      const res = await BooksAPI.getAll();
      setMyBooks(res.filter(b => b.shelf));
    };

    if (mounted) {
      getMyBooks();
    }

    // Cleanup function to prevent memory leaks
    return () => {
      mounted = false;
    };
  }, []);

  /**
   * @description Updates the category of a book and removes it from the search results
   * @param {Object} book - The book to update
   * @param {string} shelf - The new shelf category
   */
  const setCategory = async (book, shelf) => {
    if (shelf === "none") {
      return;
    }
    await BooksAPI.update(book, shelf);
    book.shelf = shelf;
    setQ(qBooks.filter(b => b.id !== book.id));
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to={"/"} className="close-search">
          Close
        </Link>
        <QueryBooks myBooks={myBooks} setQuery={setQ} />
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          <Books books={qBooks} changeCategory={setCategory} />
        </ol>
      </div>
    </div>
  );
};

export default SearchBooks;
