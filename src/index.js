import React from "react";
import ReactDOM from "react-dom/client";
import "./static/index.css";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";

/**
 * @description Entry point of the React application, renders the App component within a Router
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
