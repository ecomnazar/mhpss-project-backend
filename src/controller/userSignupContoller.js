const Users = require('../model/usersModel');
const { addText } = require('../sharp');

exports.userSignupController = async (req, res) => {
    const { first_name, last_name, email, password } = req.body;
    const data = {
        first_name,
        last_name,
        email,
        password
    }
    try {
        // console.log(first_name);
        addText(first_name + ' ' + last_name)
        // const user = await Users.create(data)
        // res.json(user)
        res.json('ok')
    } catch (error) {
        res.send(error)
    }
}