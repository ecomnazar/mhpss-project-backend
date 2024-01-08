const bcrypt = require("bcrypt");
const Users = require("../model/usersModel");
const { mailSender } = require("../mailSender");
const { addText } = require("../sharp");

exports.userSignupController = async (req, res) => {
  const { fullname, email, password, region, gender } = req.body;
  const data = {
    fullname,
    email,
    password,
    region,
    gender,
  };
  const hashedPassword = await bcrypt.hash(password, 10);
  data.password = hashedPassword;
  try {
    const user = await Users.findOne({ email: email });
    if (user) {
      res.status(404).json("useralreadyexists");
    } else {
      const response = await Users.create(data);
      res.json(response);
    }
  } catch (error) {
    res.send(error);
  }
};
