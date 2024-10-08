import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))//parser

app.use(express.urlencoded({extended: true, limit: "16kb"}))//extended urls and encoded special characters

app.use(express.static("public"))

app.use(cookieParser())



app.on("error", (error)=>{
    console.log(error)
    throw error
})


export { app }