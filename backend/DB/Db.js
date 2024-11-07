import mongoose from "mongoose";

const connectDB =()=>{
    mongoose.connect("mongodb://localhost:27017/book-store")
    .then(console.log("connected to DB"))
    .catch((err)=>console.log(err))
}

export default connectDB