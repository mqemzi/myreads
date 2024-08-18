import * as BooksAPI from "../../api/BooksAPI";

/**
 * @description Handles the search query input and updates the results
 * @param {Array} myBooks - The books already in the user's collection
 * @param {function} setQuery - Function to update the list of found books
 * @returns {JSX.Element} The QueryBooks component
 */
const QueryBooks = ({ myBooks, setQuery }) => {
  /**
   * @description Handles changes in the search input and fetches matching books
   * @param {Object} e - The event object
   */
  const handleQuery = async (e) => {
    let query = e.target.value;

    if (query.length === 0) {
      setQuery([]);
      return;
    }

    const res = await BooksAPI.search(query, 20);
    if (res instanceof Array) {
      setQuery(res.filter(b => !myBooks.some(mb => mb.id === b.id)));
    } else {
      setQuery([]);
    }
  };

  return (
    <div className="search-books-input-wrapper">
      <input
        type="text"
        placeholder="Search by title, author, or ISBN"
        onChange={handleQuery}
      />
    </div>
  );
};

export default QueryBooks;
