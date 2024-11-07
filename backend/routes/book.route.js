import { Router } from "express";
import { addbook ,getallBooks,getbookfromId ,updateTitle,updateAuthor,updateYear,deletebook,updateAll} from "../controller/book.controller.js";

const BookRoute = Router()


// add and get routs
BookRoute.route("/addbook").post(addbook)
BookRoute.route("/getallbooks").get(getallBooks)
BookRoute.route("/getbook/:id").get(getbookfromId)

//update routs
BookRoute.route("/updatetitle/:id").put(updateTitle)
BookRoute.route("/updateauthor/:id").put(updateAuthor)
BookRoute.route("/updateyear/:id").put(updateYear)

// update all  route 
BookRoute.route("/update/:id").post(updateAll)

//deleting rout
BookRoute.route("/deletebook/:id").delete(deletebook)



export default BookRoute