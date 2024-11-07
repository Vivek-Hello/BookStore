import { useState } from "react"
import BackButton from "../components/BackButton"
import axios from "axios"
import Spinning from "../components/Spinning"
import { useNavigate } from "react-router-dom"

function AddBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setpublishYear] = useState('');
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit =()=>{
      
    const data ={
      title,
      author,
      publishYear
    }
    setloading(true)
    axios.post("http://localhost:5001/book/addbook",data)
    .then(()=>{
      console.log('the book is added')
      setloading(false)
      navigate('/')
    } )
    .catch((Error)=>{
      alert(Error.message);
      setloading(false)
    })
  }
return (
    <div className="p-4">
      
      <h1 className="text-4xl text-center my-4">Add Book</h1>
      <BackButton />
      {loading?<Spinning />: ""}
      <div className="flex flex-col border-2 border-sky-600 rounded-lg w-[600px] p-4 mx-auto">
      <div className="my-4">
        <label className="text-xl mr-4 text-gray-700">Title</label>
        <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="border-2 border-gray-500 px-4 py-2 w-full bg-transparent rounded-md" />
      </div>

      <div className="my-4">
        <label className="text-xl mr-4 text-gray-700">Author</label>
        <input type="text" value={author} onChange={(e)=>setAuthor(e.target.value)} className="border-2 border-gray-500 px-4 py-2 w-full bg-transparent rounded-md" />
      </div>

      <div className="my-4">
        <label className="text-xl mr-4 text-gray-700">Publish publishYear</label>
        <input type="number" value={publishYear} onChange={(e)=>setpublishYear(e.target.value)} className="border-2 border-gray-500 px-4 py-2 w-full bg-transparent rounded-md" />
      </div>
      <button className="p-2 bg-sky-600 m-8" onClick={handleSubmit}> Save </button>
      </div>
       
      
    </div>
  )
}

export default AddBook
