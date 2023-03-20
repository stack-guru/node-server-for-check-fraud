// importing package context
const Package = require("../model/package");

exports.readPackage = async (req, res) => {
    try {
        const packages = await Package.find({})

        res.status(201).json(packages);
    } catch(err) {
        console.log(err)
    }
}

exports.createPackage = async (req, res) => {
    try {
        const name = req.body.name
        const limit = req.body.limit
        const duration = req.body.duration

        const package = await Package.create({
            name, limit, duration
        })

        res.status(201).json(package)
    } catch(err) {
        console.log(err)
    }
}

exports.updatePackage = async (req, res) => {
    try {
        const name = req.body.name
        const limit = req.body.limit
        const duration = req.body.duration
        const id = req.body.id

        const package = await Package.findOneAndUpdate({_id: id}, {name, limit, duration}, {new: true})
        res.status(201).json(package)
    } catch(err) {
        console.log(err)
    }
}

exports.deletePackage = async (req, res) => {
    try {
        const id = req.body.id
        await Package.deleteOne({_id: id})
        
        return res.status(201).json(id)
    } catch(err) {
        console.log(err)
    }
}