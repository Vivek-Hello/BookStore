import { useState} from "react";
import { useParams, useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";
import axios from "axios";
import Spinning from "../components/Spinning";

function EditBook() {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const navigate = useNavigate();
const { id } = useParams();
console.log("Book ID:", id);  // This should log the correct book ID



  const handleSubmit = () => {
    const data = { title, author, publishYear };
    console.log("Book ID:", id);  // This should log the correct book ID

    setLoading(true);
    axios.post(`http://localhost:5001/book/update/${id}`, data)
      .then(() => {
        console.log("Book is updated");
        setLoading(false);
        navigate('/');
      })
      .catch((error) => {
        console.log(error.message);
        setLoading(false);
      });
  };
  
  return (
    <div className="p-4">
      
      <h1 className="text-4xl text-center my-4">Edit Book</h1>
      <BackButton />
      {loading && <Spinning />}
      <div className="flex flex-col border-2 border-sky-600 rounded-lg w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-700">Title</label>
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            className="border-2 border-gray-500 px-4 py-2 w-full bg-transparent rounded-md" 
          />
        </div>

        <div className="my-4">
          <label className="text-xl mr-4 text-gray-700">Author</label>
          <input 
            type="text" 
            value={author} 
            onChange={(e) => setAuthor(e.target.value)} 
            className="border-2 border-gray-500 px-4 py-2 w-full bg-transparent rounded-md" 
          />
        </div>

        <div className="my-4">
          <label className="text-xl mr-4 text-gray-700">Publish Year</label>
          <input 
            type="number" 
            value={publishYear} 
            onChange={(e) => setPublishYear(e.target.value)} 
            className="border-2 border-gray-500 px-4 py-2 w-full bg-transparent rounded-md" 
          />
        </div>
        <button className="p-2 bg-sky-600 m-8 rounded-xl" onClick={handleSubmit}> Save </button>
      </div>
     
    </div>
  );
}

export default EditBook;
