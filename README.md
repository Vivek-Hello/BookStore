BookStore Project
This BookStore project is a web application for managing a collection of books, allowing users to view, add, edit, and delete books. It is built with a React front end and an Express/Node.js backend, with a MongoDB database to store book information.

Table of Contents
Features
Tech Stack
Installation
Usage
API Endpoints
File Structure
Screenshots
Future Improvements
Features
View: View a list of books in either card or table format.
Add: Add a new book with title, author, and publish year.
Edit: Update details of an existing book.
Delete: Delete a book from the collection.
Error Handling: Friendly error messages and loading spinners for better user experience.
Tech Stack
Frontend: React, Tailwind CSS, Axios
Backend: Node.js, Express
Database: MongoDB
Installation
Prerequisites
Node.js and npm installed
MongoDB database (locally or a MongoDB Atlas instance)
Steps
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/bookstore.git
cd bookstore
Install dependencies:

Frontend dependencies:
bash
Copy code
cd client
npm install
Backend dependencies:
bash
Copy code
cd server
npm install
Set up environment variables:

Create a .env file in the server directory with the following values:
plaintext
Copy code
MONGO_URI=your_mongo_connection_string
PORT=5001
Run the application:

Start the backend server:
bash
Copy code
cd server
npm start
Start the frontend:
bash
Copy code
cd client
npm start
The frontend will run on http://localhost:3000 and the backend on http://localhost:5001.
Usage
Home Page
Shows a list of books in a table or card view.
Includes options to add, edit, or delete a book.
Adding a Book
Navigate to /books/addbook to add a new book.
Enter the title, author, and publish year, then click "Save."
Editing a Book
Click the edit icon next to a book to update its details.
Change the title, author, or publish year, then click "Save."
Deleting a Book
Click the delete icon next to a book to remove it from the collection.
API Endpoints
Books API
Method	Endpoint	Description
GET	/book/getallbooks	Fetch all books
GET	/book/getbook/:id	Fetch a single book by ID
POST	/book/addbook	Add a new book
PUT	/book/update/:id	Update book information by ID
DELETE	/book/deletebook/:id	Delete a book by ID
Sample API Response for /book/getallbooks
json
Copy code
{
  "success": true,
  "data": [
    {
      "_id": "634b2c3a5f4e7b0017a6c88a",
      "title": "The Great Gatsby",
      "author": "F. Scott Fitzgerald",
      "publishYear": "1925",
      "createdAt": "2024-11-01T08:30:00.000Z",
      "updatedAt": "2024-11-01T08:30:00.000Z"
    },
    ...
  ]
}
File Structure
plaintext
Copy code
bookstore/
│
├── client/                  # React frontend
│   ├── src/
│   │   ├── components/      # Common components like Spinning, BackButton
│   │   ├── home/            # Home page components (BookTable, BookCard)
│   │   ├── App.js           # Main App component
│   │   ├── index.js         # Entry point
│   └── package.json
│
├── server/                  # Node.js backend
│   ├── controllers/         # Route handlers for books
│   ├── models/              # Mongoose schemas
│   ├── routes/              # API routes
│   ├── .env                 # Environment variables
│   └── server.js            # Server entry point
│
└── README.md                # Project documentation


Future Improvements
Implement search and filter functionality for books.
Enhance error handling and add more detailed validation.
Integrate pagination for large datasets.
