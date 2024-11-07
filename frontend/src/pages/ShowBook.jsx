import { useEffect, useState } from "react";
import Spinning from "../components/Spinning.jsx";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton.jsx";

function ShowBook() {
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5001/book/getbook/${id}`)
      .then((res) => {
        setBook(res.data.book);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl m-4">Show Book</h1>
      {loading ? (
        <Spinning />
      ) : book ? (
        <div className="flex flex-col border-2 border-sky-700 rounded-xl w-fit p-4">
          <div className="m-4">
            <span className="text-xl mr-4 text-gray-700">Id</span>
            <span>{book._id}</span>
          </div>
          <div className="m-4">
            <span className="text-xl mr-4 text-gray-700">Title</span>
            <span>{book.title}</span>
          </div>
          <div className="m-4">
            <span className="text-xl mr-4 text-gray-700">Author</span>
            <span>{book.author}</span>
          </div>
          <div className="m-4">
            <span className="text-xl mr-4 text-gray-700">Publish Year</span>
            <span>{book.publishYear}</span>
          </div>
          <div className="m-4">
            <span className="text-xl mr-4 text-gray-700">Created Time</span>
            <span>{new Date(book.createdAt).toString()}</span>
          </div>
          <div className="m-4">
            <span className="text-xl mr-4 text-gray-700">Updated Time</span>
            <span>{new Date(book.updatedAt).toString()}</span>
          </div>
        </div>
      ) : (
        <p className="text-center text-red-500">Book not found</p>
      )}
    </div>
  );
}

export default ShowBook;
