const Users = require("../model/usersModel");

exports.userSignupUpdateController = async (req, res) => {
  try {
    const user = await Users.findByIdAndUpdate(req.body._id, req.body, {
      new: true,
    });
    res.json(req.body);
  } catch (error) {
    res.send(error);
  }
};
