const asyncHandler = require("express-async-handler");

const getAllContacts = asyncHandler(async (req, res) => {
  res.send("get on base route");
});

const addContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("all fields are mandatory");
  }
  res.send(req.body);
});

const getContact = asyncHandler(async (req, res) => {
  res.send(`get on ${req.params.id}`);
});

const deleteContact = asyncHandler(async (req, res) => {
  res.send(`delete on ${req.params.id}`);
});

const editContact = asyncHandler(async (req, res) => {
  res.send(`put on ${req.params.id}`);
});

module.exports = {
  getAllContacts,
  addContact,
  getContact,
  deleteContact,
  editContact,
};
