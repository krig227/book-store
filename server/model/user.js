const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  address: [
    {
      street: String,
      city: String,
      state: String,
      postalCode: String,
      country: String,
    },
  ], // An array of saved addresses
  dob: { type: Date },
  wishlist: [
    {
      type: String,
      ref: "Book",
      field: "bookId", // Specify the field you want to reference
    },
  ],
});

module.exports = mongoose.model("User", userSchema, "users");
