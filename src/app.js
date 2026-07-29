import express from 'express'
import cors from 'cors'

const app = express()

app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true
    })
)

// Common middlewares: generally added at the top of an express app so every incoming request can use them before reaching the routes

// 1. Parses incoming requests with JSON payloads and converts JSON data from req.body into a JS Object with limit of maximum request body size upto 16kb
app.use(express.json({limit: "16kb"}))

// 2. Parses data sent from HTML forms, makes "form" data available in req.body and allows parsing nested objects using the "qs" (querystring) library 
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
/*
    for exp: user[name]=Yash&user[age]=22
    will become => {
    user: {
        name: "Yash",
        age: "22"
      }
    }
*/

// 3. Serves static files like CSS, JS or images etc.. from the public folder and no route is required, as express automatically serves files
app.use(express.static("public"))
export { app }