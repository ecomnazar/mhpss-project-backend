const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        mongoose.connect('mongodb://localhost:27017/mhpss-project')
        console.log('MongoDB Connected...')
    } catch (error) {
        console.log(error)
        process.exit()
    }
}

module.exports = connectDB