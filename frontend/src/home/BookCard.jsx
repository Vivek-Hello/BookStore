import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";

function BookCard({ books }) {
  return (
    <div className="flex "> 
      {books.map((book, index) => {
        return (
          <div key={book._id} className="flex ">
            <div className=" rounded-xl border-gray-700 shadow-lg  border-4 p-4 m-4">
              {/* <div className="gap-4 m-3 ">
                <span className="text-2xl font-mono">ID:</span>
                <span className="text-2xl font-mono">{book._id}</span>
              </div> */}
              <div className="gap-4 m-3">
                <span className="text-2xl font-mono text-gray-700">Title:</span>
                <span className="text-2xl font-mono">{book.title}</span>
              </div>
              <div className="gap-4 m-3">
                <span className="text-2xl font-mono text-gray-700">Author:</span>
                <span className="text-2xl font-mono">{book.author}</span>
              </div>
              <div className="gap-4  m-3">
                <span className="text-2xl font-mono text-gray-700">Publish Year:</span>
                <span className="text-2xl font-mono">{book.publishYear}</span>
              </div>
              <div className="flex justify-between text-3xl gap-4 m-3">
                <Link to={`/books/showbooks/${book._id}`}>
                  <BsInfoCircle className="text-sky-800 my-2" />
                </Link>
                <Link to={`/books/editbook/${book._id}`}>
                  <AiOutlineEdit className="text-yellow-600 my-2" />
                </Link>
                <Link to={`/book/deletebook/${book._id}`}>
                  <MdOutlineDelete className="text-red-600 my-2" />
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default BookCard;
