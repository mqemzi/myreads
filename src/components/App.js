import "../static/App.css";
import BooksList from "./Books/BooksList";
import { Routes, Route } from "react-router-dom";
import SearchBooks from "./Search/SearchBooks";

/**
 * @description Main application component that sets up the routing
 * @returns {JSX.Element} The App component
 */
function App() {
  return (
    <Routes className="app">
      <Route exact path="/" element={<BooksList />} />
      <Route exact path="/search" element={<SearchBooks />} />
    </Routes>
  );
}

export default App;
