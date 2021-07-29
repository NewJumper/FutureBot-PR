const mongoose = require('mongoose')
const mongoPath = 'mongodb+srv://NewJumper:NewJumper@futurebot-pr.nwfsx.mongodb.net/futurebot-pr?retryWrites=true&w=majority'

module.exports = async () => {
    await mongoose.connect(mongoPath, {
        keepAlive: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })
    return mongoose
}