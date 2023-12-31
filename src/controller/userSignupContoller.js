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
        addText(first_name + ' ' + last_name)    
        const user = await Users.create(data)
        res.json(user)
    } catch (error) {
        res.send(error)
    }
}