import { Book } from "../models/book.model.js";


const addbook = async(req,res) =>{
     
    try {
        const {title,author,publishYear} =req.body
    
        if (!title || !author || !publishYear) {
            return res.status(404).send("all field are required")
        }
        const book= await Book.create({title,author,publishYear})
        if(!book){
            return res.status(500).send("something went wrong while storing")
        }
        return res.status(200).json(book)
    } catch (error) {
        console.log(error.message);
        return res.status(500).send("something went wrong while storing")
    }
}

const getallBooks = async(req,res)=>{
      try {
        const books = await Book.find({})
        return res.status(200).json( {count : books.length,data:books})
      } catch (error) {
        console.log(error.message);
        return res.status(500).send("something went wrong while featching")
      }
}

const getbookfromId = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) { // Corrected to check if id is missing
            return res.status(404).send("id not valid");
        }
        const book = await Book.findById(id);
        if (!book) { // Additional check in case no book is found
            return res.status(404).send("Book not found");
        }
        return res.status(200).json({ book }); // Wrapped book in an object to match expected response structure
    } catch (error) {
        console.log(error.message);
        return res.status(500).send("something went wrong while fetching");
    }
};


const updateTitle = async (req, res) => {
    try {
        const { title } = req.body;
        if (!title) {
            return res.status(400).send("Title field is required");
        }

        const { id } = req.params;
        const book = await Book.findByIdAndUpdate(
            id,
            { $set: { title } },
            { new: true }
        );

        if (!book) {
            return res.status(404).send("Book not found");
        }

        return res.status(200).send({ message: "Title is updated", book });

    } catch (error) {
        return res.status(500).send("Something went wrong while updating");
    }
};

const updateAuthor = async (req, res) => {
    try {
        const { author } = req.body;
        if (!author) {
            return res.status(400).send("Author field is required");
        }

        const { id } = req.params;
        const book = await Book.findByIdAndUpdate(
            id,
            { $set: { author } },
            { new: true }
        );

        if (!book) {
            return res.status(404).send("Book not found");
        }

        return res.status(200).send({ message: "Author is updated", book });

    } catch (error) {
        return res.status(500).send("Something went wrong while updating");
    }
};

const updateYear = async (req, res) => {
    try {
        const { publishYear } = req.body;
        if (!publishYear) {
            return res.status(400).send("Publish Year field is required");
        }

        const { id } = req.params;
        const book = await Book.findByIdAndUpdate(
            id,
            { $set: { publishYear } },
            { new: true }
        );

        if (!book) {
            return res.status(404).send("Book not found");
        }

        return res.status(200).send({ message: "Year is updated", book });

    } catch (error) {
        return res.status(500).send("Something went wrong while updating");
    }
};

const deletebook = async (req,res) => {
    try {
        const {id}=req.params
    
        const book = await Book.findByIdAndDelete(id)
         if (!book) {
            return res.status(404).send("id is invalid")
         }
         return res.status(200).send({message:"the book is deleted",book})
    } catch (error) {
        return res.status(500).send("something went wrong wile deleting")
    }


}

const updateAll = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, author, publishYear } = req.body; // Corrected `titel` to `title`

        // Validate required fields
        if (!title || !author || !publishYear) {
            return res.status(400).send("All fields are required");
        }

        // Update the book document by ID
        const book = await Book.findByIdAndUpdate(
            id,
            { $set: { title, author, publishYear } },
            { new: true } 
        );

        if (!book) {
            return res.status(404).send("Book not found");
        }

        return res.status(200).send({ message: "The book is updated", book });

    } catch (error) {
        return res.status(500).send("Something went wrong while updating");
    }
};

export {addbook,getallBooks,getbookfromId,updateTitle,updateAuthor,updateYear,deletebook,updateAll}

