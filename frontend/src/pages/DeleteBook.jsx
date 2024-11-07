import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Spinning from "../components/Spinning.jsx";
import BackButton from "../components/BackButton.jsx";

function DeleteBook() {
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5001/book/getbook/${id}`)
      .then((res) => {
        setBook(res.data.book);
        setLoading(false);
      })
      .catch((error) => {
        setError("Failed to load book details. Please try again.");
        setLoading(false);
      });
  }, [id]);

  const handleClick = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5001/book/deletebook/${id}`)
      .then(() => {
        console.log("The book was deleted successfully.");
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
        setError("Failed to delete the book. Please try again.");
        setLoading(false);
      });
  };

  return (
    <div className=" m-4 w-full mb-4">
      
      <div className="flex justify-center">
      
      <h1 className="text-3xl text-center flex-1">Delete Book</h1>

      </div>
      <BackButton />
      
    <div className="flex m-8 justify-center items-center">
      {loading ? (
        <Spinning />
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : book ? (
        <div className=" flex flex-col border-4 shadow-lg m-4 p-4 rounded-lg border-gray-800">
         
          <div className="m-4">
            <span className="text-xl mr-4  text-gray-700">Id:</span>
            <span>{book._id}</span>
          </div>
          <div className="m-4">
            <span className="text-xl mr-4 text-gray-700">Title:</span>
            <span>{book.title}</span>
          </div>
          <div className="m-4">
            <span className="text-xl mr-4 text-gray-700">Author:</span>
            <span>{book.author}</span>
          </div>
          <div className="m-4">
            <span className="text-xl mr-4 text-gray-700">Publish Year:</span>
            <span>{book.publishYear}</span>
          </div>
          <button
            className="text-white bg-red-700 rounded-lg p-4 m-4"
            onClick={handleClick}
            disabled={loading}
          >
            Delete
          </button>
        </div>
      ) : (
        <p className="text-red-500 ">Something went wrong while fetching the book details.</p>
      )}
    </div>

  </div>
      
   
  );
}

export default DeleteBook;
