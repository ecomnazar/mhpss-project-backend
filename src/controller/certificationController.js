const { mailSender } = require("../mailSender");
const { addText } = require("../sharp");

exports.certificationController = async (req, res) => {
  const date = new Date().getTime();
  const { fullname, email } = req.body;
  addText(fullname, date);
  mailSender(email, date);
  res.json("ok");
};
