import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import {  MdOutlineDelete } from "react-icons/md";

function BookTable({books}) {
  return (
    <table className="w-full border-separate  border-spacing-2">
    <thead>
      <tr>
        <th className="border border-slate-800 border-2 rounded-md">No</th>
        <th className="border border-slate-800 border-2 rounded-md">Title</th>
        <th className="border border-slate-800 border-2 rounded-md max-md:hidden">
          Author
        </th>
        <th className="border border-slate-800 border-2 rounded-md max-md:hidden">
          Publish-Year
        </th>
        <th className="border border-slate-800 border-2 rounded-md">Operation</th>
      </tr>
    </thead>
    <tbody>
      {books.map((book, index) => (
        <tr key={book._id} className="h-8">
          <td className="border-2 border-slate-700 rounded-md text-center">
            {index + 1}
          </td>
          <td className="border-2 border-slate-700 rounded-md text-center">
            {book.title}
          </td>
          <td className="border-2 border-slate-700 rounded-md text-center">
            {book.author}
          </td>
          <td className="border-2 border-slate-700 rounded-md text-center">
            {book.publishYear}
          </td>
          <td className="border-2 border-slate-700 rounded-md text-center">
            <div className="flex justify-center gap-4">
              <Link to={`/books/showbooks/${book._id}`}>
                <BsInfoCircle className="text-sky-600" />
              </Link>
              <Link to={`/books/editbook/${book._id}`}>
                <AiOutlineEdit className="text-yellow-600 " />
              </Link>
              <Link to={`/book/deletebook/${book._id}`}>
                <MdOutlineDelete className="text-red-600 " />
              </Link>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  </table>

  )
}

export default BookTable
