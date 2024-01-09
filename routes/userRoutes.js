const express = require("express");
const userRouter = express.Router();
const validateToken = require("../middlewares/validateTokenHandler");

const {
  registerUser,
  loginUser,
  getCurrentUser,
} = require("../controllers/userController");

userRouter.route("/register").post(registerUser);
userRouter.route("/login").post(loginUser);
userRouter.get("/current", validateToken, getCurrentUser);

module.exports = userRouter;
