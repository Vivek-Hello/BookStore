import { useState, useEffect } from "react";
import axios from "axios";
import Spinning from "../components/Spinning.jsx";

import { MdOutlineAddBox } from "react-icons/md";
import { Link } from "react-router-dom";
import BookTable from "../home/BookTable.jsx";
import BookCard from "../home/BookCard.jsx";

function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showTable , setshowTable]=useState('table')

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5001/book/getallbooks")
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Failed to load books. Please try again later.",error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-center m-4 text-4xl"> Book Store Application</h1>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Book List</h1>
        <Link to={"/books/addbook"}>
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>

      {loading ? (
        <Spinning />
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : books.length === 0 ? (
        <p className="text-center text-gray-600">No books available</p>
      ) : 
      <div >
         <div className="flex flex-row justify-center items-center gap-4 m-5  ">
  <button className="p-4 bg-sky-700 border-sky-900 rounded-lg " onClick={() => setshowTable('table')}>Table</button>  
  <button className="p-4 bg-sky-700 border-sky-900 rounded-lg" onClick={() => setshowTable('card')}>Card</button>
</div>

       <div className="">
        {showTable === 'table'? <BookTable books={books} /> : <BookCard books={books} />}
       </div>
      </div>
      }
    </div>
  );
}

export default Home;
