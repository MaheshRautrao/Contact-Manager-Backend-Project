const express = require("express");
const contactRouter = express.Router();

const {
  getAllContacts,
  addContact,
  getContact,
  deleteContact,
  editContact,
} = require("../controllers/contactController");
const validateToken = require("../middlewares/validateTokenHandler");

contactRouter.use(validateToken);
contactRouter.route("/").get(getAllContacts).post(addContact);

contactRouter
  .route("/:id")
  .get(getContact)
  .put(editContact)
  .delete(deleteContact);

module.exports = contactRouter;
