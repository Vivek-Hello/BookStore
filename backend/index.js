import express from 'express'
import dotenv from 'dotenv'
import connectDB from './DB/Db.js'
import BookRoute from './routes/book.route.js'
import cors from 'cors'

dotenv.config()



const app = express()

app.use(express.json())
// there  are 2 methods to use cors 

// method 1 
//  app.use(cors())   -> this will allows every website to access the surver

// method 2 
/*
  app.use(cors({
  origin :"", -> here url or the front end url which u want to request 
  method : [], -> methods like  post get put delete etc
  allowedHeaders:[], -> contenet types
  }))
*/


// this i will use method one 

app.use(cors())
app.use('/book' , BookRoute)

const port = process.env.PORT || 6000
connectDB()
app.listen(port,()=>{
    console.log(`the server is listening at port ${port}`);
})