const Users = require("../model/usersModel")

exports.userLoginController = async (req, res) => {
    try {
        const user = await Users.findOne({ first_name: req.body.first_name })
        if(user){
            if(user.password === req.body.password){
                res.json(user)
            } else {
                res.status(404).json("Wrong Password")
            }
        }else{
            res.status(404).json("User not found")
        }
    } catch (error) {
    }   
}