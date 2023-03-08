const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// importing user context
const User = require("../model/user");

exports.register = async (req, res) => {
    // Our register logic starts here
    try {
        console.log(req.body)
        // Get user input
        const { name, email, password } = req.body;

        // Validate user input
        if (!(email && password && name)) {
            return res.status(400).send("All input is required");
        }

        var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        if (!emailRegex.test(email)) {
            return res.status(400).send("Email is not valid");
        }

        if (password.length < 12) {
            return res.status(400).send("Password must be longer than 12");
        }

        // check if user already exist
        // Validate if user exist in our database
        const oldUser = await User.findOne({ email });

        if (oldUser) {
            return res.status(409).send("User Already Exist. Please Login");
        }

        //Encrypt user password
        encryptedPassword = await bcrypt.hash(password, 10);

        // Create user in our database
        const user = await User.create({
            name,
            email: email.toLowerCase(), // sanitize: convert email to lowercase
            password: encryptedPassword,
        });

        // Create token
        const token = jwt.sign(
            { user_id: user._id, email, user_role: user.role },
            process.env.TOKEN_KEY,
            {
                expiresIn: "2h",
            }
        );
        // save user token
        // user.token = token;

        // return new user
        res.status(201).json(token);
    } catch (err) {
        console.log(err);
    }
    // Our register logic ends here
}

exports.login = async (req, res) => {
    try {
        // Get user input
        const { email, password } = req.body;

        // Validate user input
        if (!(email && password)) {
            return res.status(400).send("All input is required");
        }
        // Validate if user exist in our database
        const user = await User.findOne({ email });

        if (user && (await bcrypt.compare(password, user.password))) {
            // Create token
            const token = jwt.sign(
                { user_id: user._id, email, user_role: user.role },
                process.env.TOKEN_KEY,
                {
                    expiresIn: "2h",
                }
            );

            // save user token
            // user.token = token;

            // user
            return res.status(200).json(token);
        }
        res.status(400).send("Invalid Credentials");
    } catch (err) {
        console.log(err);
    }
}

exports.getUsers = async (re, res) => {
    try {
        const users = await User.find();
        res.status(201).send(users)
    } catch(err) {
        console.log(err)
    }
}