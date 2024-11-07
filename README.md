# BookStore Project

This BookStore project is a web application for managing a collection of books, allowing users to view, add, edit, and delete books. It is built with a React front end and an Express/Node.js backend, with a MongoDB database to store book information.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [File Structure](#file-structure)
- [Future Improvements](#future-improvements)


---

## Features

- **View**: Browse the list of available books.
- **Add**: Add a new book with details like title, author, and publish year.
- **Edit**: Modify details of an existing book.
- **Delete**: Remove a book from the collection.
- **Toggle View**: Switch between table and card views.

## Tech Stack

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Other**: Axios for HTTP requests, React Router for navigation

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Vivek-Hello/BookStore.git
   cd bookstore




## Usage
View all books: Navigate to the home page to see the list of books.
Add a book: Click the "Add Book" button to add new book details.
Edit a book: Click the edit icon to update book details.
Delete a book: Click the delete icon to remove a book.
View Book Details: Click the info icon to view book details.
API Endpoints
GET /book/getallbooks: Retrieve all books.
GET /book/getbook/:id: Retrieve a single book by ID.
POST /book/addbook: Add a new book.
PUT /book/update/:id: Update an existing book by ID.
DELETE /book/deletebook/:id: Delete a book by ID.
Commands
Below are common commands used for managing the BookStore project:


## File Structure
plaintext
Copy code
BookStore/
├── backend/                 # Node.js Backend
│   ├── controller/          # Controller functions (bookController.js)
│   ├── DB/                  # Database connection (db.js)
│   ├── models/              # Mongoose models (Book.js)
│   ├── routes/              # API routes (bookRoutes.js)
│   ├── .env                 # Environment variables
│   ├── .gitignore
│   ├── index.js             # Main server file
│   ├── package.json
│   └── package-lock.json
├── frontend/                # React Frontend
│   ├── public/              # Public assets
│   ├── src/
│   │   ├── assets/          # Static assets
│   │   ├── components/      # Shared components (Spinning, BackButton)
│   │   ├── home/            # Home, BookTable, BookCard components
│   │   ├── pages/           # ShowBook, EditBook, DeleteBook
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   └── vite.config.js
├── .gitignore
└── README.md

## API Endpoints
- GET /book/getallbooks: Retrieve all books.
- GET /book/getbook/:id: Retrieve a single book by ID.
- POST /book/addbook: Add a new book.
- PUT /book/update/:id: Update an existing book by ID.
- DELETE /book/deletebook/:id: Delete a book by ID.

## Future Improvements
Implement user authentication.
Add pagination for large datasets.
Enhance UI/UX with animations and improved design.
