const User = require("../model/user");

const verifyApikey = async (req, res, next) => {
    if (!req.query.apiKey) {
        return res.status(200).send("No ApiKey")
    }

    try {
        const user = await User.findOne({apiKey: req.query.apiKey})
        if (user) {
            return next()
        }
    } catch(err) {
        console.log(err)
    }
    return res.status(400).send("Invalid ApiKey")
}

module.exports = verifyApikey