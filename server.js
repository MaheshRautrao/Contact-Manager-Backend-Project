const express = require("express");
const dotenv = require("dotenv").config();

const connectDB = require("./db/dbConnection");
const contactRouter = require("./routes/contactRoutes");
const userRouter = require("./routes/userRoutes");

const errorHandler = require("./middlewares/errorHandler");

// database connection
connectDB();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/contacts", contactRouter);
app.use("/api/users", userRouter);
app.use(errorHandler);

app.listen(port, () => {
  console.log("Server running on Port " + port);
});
