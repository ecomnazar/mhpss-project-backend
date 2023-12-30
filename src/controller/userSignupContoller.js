const Users = require('../model/usersModel')

exports.userSignupController = async (req, res) => {
    const { first_name, last_name, email, password } = req.body;
    const data = {
        first_name,
        last_name,
        email,
        password
    }
    try {
        const user = await Users.create(data)
        res.json(user)
    } catch (error) {
        res.send(error)
    }
}