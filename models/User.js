const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
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
    thoughts: {
      //Array of _id values referencing the Thought model
    },
    friends: {
      //Array of _id values referencing the User model (self referencing)
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

UserSchema.virtual("friendCount").get(function () {
  return this.friends.reduce((total, friends) => total + friends.length + 1, 0);
});

module.exports = UserSchema;
