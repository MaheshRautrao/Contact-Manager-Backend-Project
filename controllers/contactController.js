const asyncHandler = require("express-async-handler");
const contactModel = require("../models/contactModel.js");

const getAllContacts = asyncHandler(async (req, res) => {
  const contacts = await contactModel.find();
  res.status(200).json(contacts);
});

const addContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("all fields are mandatory");
  }

  const contact = await contactModel.create({
    name,
    email,
    phone,
  });

  res.status(201).json(contact);
});

const getContact = asyncHandler(async (req, res) => {
  const contact = await contactModel.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json(contact);
});

const editContact = asyncHandler(async (req, res) => {
  const contact = await contactModel.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  const updatedContact = await contactModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedContact);
});

const deleteContact = asyncHandler(async (req, res) => {
  const contact = await contactModel.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  await contactModel.deleteOne({ _id: req.params.id });
  res.status(200).json(contact);
});

module.exports = {
  getAllContacts,
  addContact,
  getContact,
  editContact,
  deleteContact,
};
