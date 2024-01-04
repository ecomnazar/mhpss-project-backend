const { mailSender } = require("../mailSender");
const { addText } = require("../sharp");

exports.certificationController = async (req, res) => {
  const date = new Date().getTime();
  const { first_name, last_name } = req.body;
  addText(first_name + " " + last_name, date);
  mailSender(first_name, date);
  res.json("ok");
};
