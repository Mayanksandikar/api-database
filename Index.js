const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const userStudentRoute = require("./routes/userStudentRoutes");
const userTeacherRoute = require("./routes/userRoutes");

dotenv.config();

const app = express();

// CORS configuration to allow requests from a specific origin
// app.use(cors({
//   origin: ["https://student-data-9os7.vercel.app"],
//   methods: ["POST", "GET"],
//   credentials:true
// }));

// Middleware to parse JSON request bodies
app.use(express.json());

// Connect to the MongoDB database
const URI = "mongodb+srv://mayanksandikar191098:P612SpRzc2bEeue0@reactjs.smvpawt.mongodb.net/krt?retryWrites=true&w=majority&appName=reactjs"
 

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
  console.log("Connected to the database successfully");
}).catch((error) => {
  console.log("Error connecting to the database:", error);
});

// Route for handling student-related routes
app.use("/students", userStudentRoute);

// Route for handling teacher-related routes
app.use("/teachers", userTeacherRoute);

// Middleware to ignore favicon.ico requests
app.use('/favicon.ico', (req, res) => res.status(204));

// Default route handler

app.get("/", (req, res) => {
  
  res.json({ message: "Hello Vercel" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
