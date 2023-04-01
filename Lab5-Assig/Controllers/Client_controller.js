const ClientModel = require('../Models/Client')

module.exports = {
    all(req, res, next) {
        const limit = parseInt(req.query.limit) || ''
        ClientModel.find({}).limit(limit)
            .then(client => res.send(client))
            .catch(next)
        // res.send("All Clients")
    },

    Create_Client(req, res, next) {
        const clientProps = req.body;
        ClientModel.create(clientProps)
            .then(client => res.status(201).send(client))
            .catch(next)
    },

    Edit_Client(req, res, next) {
        const clientId = req.params.id;
        const clientProps = req.body;

        ClientModel.findByIdAndUpdate({ _id: clientId }, clientProps)
            .then(() => ClientModel.findById({ _id: clientId }))
            .then(client => res.status(200).send(client))
            .catch(next)
    },

      Delete_Client(req, res, next){
        const clientId = req.params.id;

        ClientModel.findByIdAndRemove({_id: clientId})
        .then(()=> res.status(204).send('Client deleted'))
        .catch(next)
      },

      Details_Client(req, res, next){
        const clientId = req.params.id;

        ClientModel.findById({_id: clientId})
        .then(client => res.status(200).send(client))
        .catch(next)
      }
}