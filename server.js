const express = require("express");
const dotenv = require("dotenv").config();

const connectDB = require("./db/dbConnection");
const contactRouter = require("./routes/contactRoutes");

const errorHandler = require("./middlewares/errorHandler");

// database connection
connectDB();

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use("/api/contacts", contactRouter);
app.use(errorHandler);

app.listen(port, () => {
  console.log("Server running on Port " + port);
});
