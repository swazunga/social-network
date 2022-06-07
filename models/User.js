const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    unique: true,
    validate: [validateEmail, "Please enter a valid email address"],
    match: /.+\@.+\..+/,
  },
});
