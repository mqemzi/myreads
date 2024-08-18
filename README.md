
# MY READS Project

MyReads is a React application designed to help book lovers organize their reading lists. With MyReads, users can easily search for books and categorize them into one of three shelves: "Currently Reading," "Want to Read," or "Read."
## Installation

To get started with the application:

- install all dependencies with `npm install`
- start the application with `npm start`
## Project's Directory

```bash
├── README.md
├── LICENSE.txt
├── .gitignore
├── package.json
├── package-lock.json
├── public
│   ├── favicon.ico
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   ├── robots.txt
│   └── index.html
│── src
    ├── api
    │   └── BooksAPI.js
    ├── components
    │   ├── Books
    │   │   ├── Books.js
    │   │   ├── BooksList.js
    │   │   ├── Bookshelf.js
    │   │   └── ChangeCategory.js
    │   ├── Search
    │   │   ├── QueryBooks.js
    │   │   └── SearchBooks.js
    │   └── App.js
    ├── static
    │   ├── icons
    │   │   ├── add.svg
    │   │   ├── arrow-back.svg
    │   │   └── arrow-drop-down.svg
    │   ├── App.css
    │   └── index.css
    └── index.js 
```
## Pages

#### \<Home Page\/\>

Displays your collection of books in Three shelves:
- Currently Reading
- Want to Read
- Read
You can also move books to different shelves.

#### \<Search Page\/\>

Allows you to search for books and add them to your bookshelf.
## Backend Server

The file [`BooksAPI.js`](src/BooksAPI.js) contains the methods to perform necessary operations on the backend:

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebook/create-react-app/blob/main/packages/cra-template/template/README.md).# myreads
