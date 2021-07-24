const mongoose = require("mongoose");


const userSchema = new mongoose.Schema(
  {
    user: {
      type: String,
      required: true,
      minLength: 5,
	  unique: true
    },
	password: {
		type: String,
		required: true,
		minLength: 5,
	  },
  }
);


const User = mongoose.model("user", userSchema);

module.exports = {
  User
};