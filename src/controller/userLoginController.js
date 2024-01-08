const bcrypt = require("bcrypt");
const Users = require("../model/usersModel");

exports.userLoginController = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Users.findOne({ email: email });
    if (user) {
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        res.status(200).json(user);
      } else {
        res.status(404).json("Wrong Password");
      }
    } else {
      res.status(404).json("User not found");
    }
  } catch (error) {}
};
