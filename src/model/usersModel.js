const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema(
  {
    full_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    region: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

const Users = mongoose.model("users", usersSchema);
module.exports = Users;
