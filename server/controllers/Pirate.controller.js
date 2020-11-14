const Pirate = require("../models/Pirate.model");

module.exports ={
    create (req, res) {
        Pirate.create(req.body)
        .then(newPirate => res.json(newPirate))
        .catch(err => res.json({ message: "Can not create new pirate.", error: err }));
    },
    
    delete (req, res) {
        Pirate.deleteOne({_id: req.params.id })
        .then(remove => res.json(remove))
        .catch(err => res.json({ message: "Can not remove pirate.", error: err }));
    },

    getAll (req, res) {
        Pirate.find()
        .then((Pirates) => res.json(Pirates))
        .catch(err => res.json({ message: "Can not get pirates.", error: err }));
    },

    getOne (req, res) {
        Pirate.findOne({_id: req.params.id})
        .then(Pirate => res.json(Pirate))
        .catch(err => res.json({ message: "Can not get pirate.", error: err }));
    },

    update (req, res) {
        Pirate.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then(updatePirate => res.json({ Pirate: updatePirate }))
        .catch(err => res.json({ message: "Could not update pirate.", error: err }));
    }
}
