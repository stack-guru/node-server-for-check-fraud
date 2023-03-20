const randomstring = require("randomstring");
const validUrl = require('valid-url');

const Shortlink = require("../model/shortlink");

exports.readShortlinks = async (req, res) => {
    try {
        const shortlinks = await Shortlink.find({})

        res.status(201).json(shortlinks);
    } catch(err) {
        console.log(err)
    }
}

exports.createShortlink = async (req, res) => {
    try {
        const url = req.body.url
        const keyname = req.body.keyname
        let shortLink = ""

        if (!validUrl.isUri(url)){
            return res.status(403).send("invalid url")
        }

        if (keyname) {
            shortLink = keyname
            const found = await Shortlink.find({shortLink})
            if (found) {
                return res.status(403).send("duplicate keyname")
            }
        } else {
            shortLink = randomstring.generate(7)
        }
        const created = await Shortlink.create({
            url, shortLink
        })

        return res.status(201).json(created)
    } catch(err) {
        console.log(err)
    }
}

exports.redirect = async (req, res) => {
    const keyname = req.params.shortlink

    const found = await Shortlink.findOne({shortLink: keyname})
    if (found) {
        return res.redirect(found.url);
    } else {
        return res.redirect('https://www.google.com/');
    }
}

exports.deleteShortlink = async (req, res) => {
    try {
        const id = req.body.id
    
        const deleted = await Shortlink.deleteOne({_id: id})
        return res.status(201).json(id)
    } catch(err) {
        console.log(err)
    }
}