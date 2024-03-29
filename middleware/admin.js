const jwt = require("jsonwebtoken");

const config = process.env;

const verifyAdmin = (req, res, next) => {
    const token =
        req.body.token || req.query.token || req.headers["x-access-token"];

    if (!token) {
        return res.status(403).send("A token is required for authentication");
    }
    try {
        const decoded = jwt.verify(token, config.TOKEN_KEY);
        req.user = decoded;

        if (decoded.user_role != "admin") {
            return res.status(401).send("No Admin");    
        }
    } catch (err) {
        return res.status(401).send("Invalid Token");
    }
    return next();
};

module.exports = verifyAdmin;