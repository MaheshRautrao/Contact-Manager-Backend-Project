const express = require("express");
const contactRouter = express.Router();
const {
  getAllContacts,
  addContact,
  getContact,
  deleteContact,
  editContact,
} = require("../controllers/contactController");

contactRouter.route("/").get(getAllContacts).post(addContact);

contactRouter
  .route("/:id")
  .get(getContact)
  .put(editContact)
  .delete(deleteContact);

module.exports = contactRouter;
