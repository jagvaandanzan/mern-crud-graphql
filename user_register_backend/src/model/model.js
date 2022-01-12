const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = {
  User: mongoose.model(
    "User",
    new Schema(
      {
        lastName: {
          type: String,
          required: true,
        },
        userName: {
          type: String,
          required: true,
        },
        email: {
          type: String,
          required: true,
        },
        phone: {
          type: Number,
          unique: true,
        },
        age: {
          type: Number,
          unique: true,
        },
        register: {
          type: String,
          unique: true,
          required: true,
        },
      },
      { collection: "users" }
    )
  ),
};
