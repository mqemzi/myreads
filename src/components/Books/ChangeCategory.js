/**
 * @description Component for changing a book's category
 * @param {Object} book - The book object
 * @param {function} changeCategory - Function to change the category of the book
 * @returns {JSX.Element} The ChangeCategory component
 */
const ChangeCategory = ({ book, changeCategory }) => {
  /**
   * @description Handles the selection of a new category for a book
   * @param {Object} e - The event object
   */
  const handleCategory = (e) => {
    changeCategory(book, e.target.value);
    e.defaultValue = e.target.value;
  };

  return (
    <div className="book-shelf-changer">
      <select onChange={handleCategory} defaultValue={book.shelf || "none"}>
        <option value="none" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

export default ChangeCategory;
