import express from "express";
//Imports the Express.js framework for building web applications.
import bodyParser from "body-parser";
//Imports middleware to parse incoming request bodies.
import mongoose from "mongoose";
// Imports MongoDB object modeling tool for Node.js.
import cors from "cors";
// Imports middleware for enabling Cross-Origin Resource Sharing (CORS).
import dotenv from "dotenv";
// Loads environment variables from a .env file into process.env.
import multer from "multer";
// Imports middleware for handling multipart/form-data,which is used for uploading files.
import helmet from "helmet";
// Imports middleware for setting security-related HTTP headers.
import morgan from "morgan";
// Imports middleware for logging HTTP requests.
import path from "path";
// Provides utilities for working with file and directory paths.
import { fileURLToPath } from "url";
// Provides utilities for working with URLs.
// param=> is url string or oject to conver to a path
// returns=> fully resolves platform-specific Node.js file path
import fetch from 'node-fetch';

//  routes
import codechefRoutes from "./routes/codechef.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import cpRoutes from "./routes/codingprofiles.js";


import { register } from "./controllers/auth.js";
import { createCodingProfile } from "./controllers/auth.js";
import { createPost } from "./controllers/posts.js";
import { verifyToken } from "./middleware/auth.js";

//  model for MongoDB
import User from "./models/User.js";
import Post from "./models/Post.js";
import CodingProfile from "./models/CodingProfile.js"
import CodeChef from "./models/CodeChef.js"
//  Imports sample data for seeding the database.
// import { users, posts, } from "./data/index.js";

/* CONFIGURATIONS */

// to get the current file path and the directory of the current file
const __filename = fileURLToPath(import.meta.url); 
//converts the URL of the current file (import.meta.url) 
// to the corresponding file path.

const __dirname = path.dirname(__filename);
// returns the directory name of a path.

dotenv.config(); //loads the environment variables from a .env file into the process.env object. 
//allows the application to access the environment variables defined in the .env file.
const app = express();
app.use(express.json()); 
//middleware to parse incoming requests with JSON payloads.
// populates the req.body property with the parsed data.
//This allows the application to access the request payload data in a structured way. 
app.use(helmet());

// protect the application from common web vulnerabilities by setting HTTP headers
//  such as X-XSS-Protection, X-Content-Type-Options, Content-Security-Policy, and others.
// This middleware adds an extra layer of security to the application and is considered a best practice for web development.

app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
// header to control which resources are available to cross-origin requests. 
//This middleware helps to prevent cross-site scripting (XSS) attacks and other security vulnerabilities.

app.use(morgan("common")); // logs incoming requests to console

//parse incoming request bodies in JSON and URL-encoded formats
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors()); // to bypass the Same-Origin Policy

app.use("/assets", express.static(path.join(__dirname, "public/assets")));
//serves static files files from directory on the server.

/* FILE STORAGE */

// multer.diskStorage() : a storage engine that saves uploaded files to disk. 
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/assets");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage }); //middleware that can be used to handle file uploads.

/* ROUTES WITH FILES */
app.post("/auth/register", upload.single("picture"), register);

app.post("/auth/createCodingProfile", createCodingProfile);

app.post("/posts", verifyToken, upload.single("picture"), createPost);
// 
/* ROUTES */
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/posts", postRoutes);
app.use("/posts", postRoutes);
app.use("/codingprofiles", cpRoutes);
console.log("start");

app.get('/', (req, res) => {
  res.send('Hello, Server!');
}); 
 console.log("start codechef");
app.get('/codechef/:username', async (req, res) => {
  try {
    console.log("try block of codechef");
    const { username } = req.params;
    const apiUrl = `https://coding-platform-profile-api.onrender.com/codechef/${username}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    res.json(data);
    // console.log("start");
    console.log(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.get('/', (req, res) => {
  res.send('Hello, Server!');
}); 
 console.log("start codechef");
app.get('/codechef/:username', async (req, res) => {
  try {
    console.log("try block of codechef");
    const { username } = req.params;
    const apiUrl = `https://coding-platform-profile-api.onrender.com/codechef/${username}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    res.json(data);
    // console.log("start");
    console.log(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
// `https://coding-platform-profile-api.onrender.com/geeksforgeeks/kunwarisha9`
app.get('/geeksforgeeks/:username', async (req, res) => {
  try {
    console.log("try block of codechef");
    const { username } = req.params;
    const apiUrl = `https://coding-platform-profile-api.onrender.com/geeksforgeeks/${username}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    res.json(data);
    // console.log("start");
    console.log(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// app.use("/codechef", codechefRoutes);
console.log("end");





/* MONGOOSE SETUP */
const PORT = process.env.PORT || 6001;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    /* ADD DATA ONE TIME */
    // CodingProfile.insertMany(CodingProfiles);
    // User.insertMany(users);
    // Post.insertMany(posts);
  })
  .catch((error) => console.log(`${error} did not connect`));
