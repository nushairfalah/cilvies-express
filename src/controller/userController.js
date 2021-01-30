const UserModel = require('../model').user

module.exports = {
    retrieveAllItem: async (req, res) => {
        try {
            const allUser = await UserModel.findAll()
            console.log(allUser)
            res.json(allUser)
        } catch (error) {
            res.sendStatus(500)
        }
    },

    retrieveById: async (req, res) => {
        const id = parseInt(req.params.id)
        const selectedItem = await UserModel.findByPk(id)

        if (!selectedItem) {
            res.status(404).send(`user with id ${id} was not found`)
        } else {
            res.json(selectedItem)
        }
    },

    createItem: async (req, res) => {
        const newItem = {
            title: req.body.title,
            description: req.body.description,
            imageurl: req.body.imageurl,
            status: req.body.status,
        }

        await UserModel.create(newItem)
        res.sendStatus(201)
    },

    updateItem: async (req, res) => {
        const payload = req.body
        const id = parseInt(req.params.id)
        await UserModel.update(payload, { where: { id: id } })
        res.json({ id, ...payload })
    },

    deleteItem: async (req, res) => {
        const id = parseInt(req.params.id)
        await UserModel.destroy({ where: { id: id } })
        res.sendStatus(204)
    },

}
