const bcrypt = require("bcrypt");
const Users = require("../model/usersModel");
const { mailSender } = require("../mailSender");
const { addText } = require("../sharp");

exports.userSignupController = async (req, res) => {
  const { full_name, email, password, region, gender } = req.body;
  const data = {
    full_name,
    email,
    password,
    region,
    gender,
  };
  const hashedPassword = await bcrypt.hash(password, 10);
  data.password = hashedPassword;
  try {
    const user = await Users.create(data);
    res.json(user);
  } catch (error) {
    res.send(error);
  }
};
