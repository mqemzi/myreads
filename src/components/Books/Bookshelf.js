import Books from "./Books";

/**
 * @description Represents a bookshelf containing books
 * @param {Array} books - The list of books on this shelf
 * @param {string} title - The title of the bookshelf
 * @param {string} category - The category identifier for the shelf
 * @param {function} changeCategory - Function to change the category of a book
 * @returns {JSX.Element} The BookShelf component
 */
const BookShelf = ({ books, title, category, changeCategory }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <Books books={books} category={category} changeCategory={changeCategory} />
      </div>
    </div>
  );
};

export default BookShelf;
