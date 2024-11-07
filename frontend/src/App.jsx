import { Route,Routes } from "react-router-dom"
import Home from "./pages/Home.jsx"
import ShowBook from "./pages/ShowBook.jsx"
import AddBook from "./pages/AddBook.jsx"
import EditBook from "./pages/EditBook.jsx"
import DeleteBook from "./pages/DeleteBook.jsx"


function App() {
  return (
    <Routes>
      <Route  path="/" element={<Home />}/>
      <Route path="/books/showbooks/:id" element={<ShowBook />}/>
      <Route path="/books/addbook" element={<AddBook />} />
      <Route path="/books/editbook/:id" element={<EditBook />} />
      <Route path="/book/deletebook/:id" element={<DeleteBook />} /> 
    </Routes>
  )
}

export default App
